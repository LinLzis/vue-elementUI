import request from '@/utils/request'

export function fetchAgentList (query) {
  return request({
    url: '/agents',
    method: 'get',
    params: query
  })
}

export function updateAgent (data) {
  return request({
    url: '/agents/' + data.id,
    method: 'put',
    data
  })
}

export function getAgentById (id) {
  return request({
    url: '/agents/' + id,
    method: 'get'
  })
}
