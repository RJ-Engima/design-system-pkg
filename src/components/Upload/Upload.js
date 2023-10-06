import React, {useState} from "react";
import { Upload, Modal } from "antd";
import "./upload.css";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const Uploads = ({
  id,
  action,
  iconClass,
  onChange,
  Droptext,
  Icon,
  maxCount,
  name,
  multiple,
  showUploadList,
  accept,
  fileList,
  onClick,
  uid	,
  disabled
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("done");
    }, 100);
  };
  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  return (
    <React.Fragment>
      <Upload
        className={`dls-upload ${multiple === false ? "dsl-upload-single" : "dsl-upload-multiple"}`}
        customRequest={dummyRequest}
        listType={`${multiple === true ? "picture" : "picture-card"}`}
        id={id}
        accept={accept}
        maxCount={maxCount}
        multiple={multiple}
        showUploadList={
          {
            showPreviewIcon:true,
            showRemoveIcon:true
          }
        }
        name={name}
        uid={uid}
        onClick={onClick}
        disabled={disabled}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={onChange}
      >
        <div>
          <i className="icon icon-Line-System-Logout"></i>
          <div>
            {/* <h4 className="drop-text">{Droptext}</h4> */}
            <p className="p-text">
              <p className="uploadTxt_1">Drog & Drop your file</p>
              <p className="uploadTxt_2">SVG, PNG or JPG(max. 400x400px)</p>
            </p>
          </div>
          {/* <Button className="btn-dark upload-icon" style={{margin: '5px auto'}}>{UploadInnerText}</Button>       */}
        </div>
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </React.Fragment>
  );
};
export default Uploads;
