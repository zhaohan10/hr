import axios from '@/utils/request';

/**
 * 分页查询角色
 * @param params 查询条件
 */
export async function pageRoles(params) {
  const res = await axios.get('/system/role/page', {
    params
  });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 查询角色列表
 * @param params 查询条件
 */
export async function listRoles(params) {
  const res = await axios.get('/system/role', {
    params
  });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 添加角色
 * @param data 角色信息
 */
export async function addRole(data) {
  const res = await axios.post('/system/role', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改角色
 * @param data 角色信息
 */
export async function updateRole(data) {
  const res = await axios.put('/system/role', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 删除角色
 * @param id 角色id
 */
export async function removeRole(id) {
  const res = await axios.delete('/system/role/' + id);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 批量删除角色
 * @param ids 角色id集合
 */
export async function removeRoles(data) {
  const res = await axios.delete('/system/role/batch', {
    data
  });
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 获取角色分配的菜单
 * @param roleId 角色id
 */
export async function listRoleMenus(roleId) {
  const res = await axios.get('/system/role-menu/' + roleId);
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改角色菜单
 * @param roleId 角色id
 * @param data 菜单id集合
 */
export async function updateRoleMenus(roleId, data) {
  const res = await axios.put('/system/role-menu/' + roleId, data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}
