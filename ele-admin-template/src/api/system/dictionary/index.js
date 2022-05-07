import axios from '@/utils/request';

/**
 * 查询字典列表
 * @param params 查询条件
 */
export async function listDictionaries(params) {
  const res = await axios.get('/system/dictionary', {
    params
  });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 添加字典
 * @param data 字典信息
 */
export async function addDictionary(data) {
  const res = await axios.post('/system/dictionary', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改字典
 * @param data 字典信息
 */
export async function updateDictionary(data) {
  const res = await axios.put('/system/dictionary', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 删除字典
 * @param id 字典id
 */
export async function removeDictionary(id) {
  const res = await axios.delete('/system/dictionary/' + id);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}
