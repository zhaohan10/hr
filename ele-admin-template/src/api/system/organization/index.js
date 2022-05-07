import axios from '@/utils/request';

/**
 * 分页查询机构
 * @param params 查询条件
 */
export async function pageOrganizations(params) {
  const res = await axios.get('/system/organization/page', {
    params
  });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 查询机构列表
 * @param params 查询条件
 */
export async function listOrganizations(params) {
  const res = await axios.get('/system/organization', {
    params
  });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 添加机构
 * @param data 机构信息
 */
export async function addOrganization(data) {
  const res = await axios.post('/system/organization', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改机构
 * @param data 机构信息
 */
export async function updateOrganization(data) {
  const res = await axios.put('/system/organization', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 删除机构
 * @param id 机构id
 */
export async function removeOrganization(id) {
  const res = await axios.delete('/system/organization/' + id);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}
