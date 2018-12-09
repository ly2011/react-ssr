import request from '../utils/request'

import { BASE_API } from '../config'

// 获取话题列表
export const getTopics = (params = {}) => {
  return request({
    url: `${BASE_API}/topics`,
    params
  })
}
