import axios from '@/utils/request';

/**
 * 上传文件
 * @param file 文件
 */
export async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post('/file/upload', formData);
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 分页查询文件上传记录
 * @param params 查询条件
 */
export async function pageFiles(params) {
  const res = await axios.get('/file/page', {
    params
  });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}
