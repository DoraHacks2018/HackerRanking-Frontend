import axios from 'axios'

const url = 'https://ranking.dorahacks.com/api'

export default {
  login (username, password) {
    return axios.post(`${url}/login`, {
      username,
      password
    }, {
      headers: { 'content-type': 'application/json' }
    })
  },
  logout () {
    return axios.post(`${url}/logout`, {
      headers: {
        'content-type': 'application/json',
        'X-Auth-Token': window.cookieStorage.getItem('token') }
    })
  },
  register (username, email, password) {
    return axios.post(`${url}/register`, {
      username,
      password,
      email
    }, {
      headers: { 'content-type': 'application/json' }
    })
  },
  login_auth (code) {
    return axios.post(`${url}/auth-login/github`, { code: code },
      { headers: { 'content-type': 'application/json' } })
  },
  register_auth_git (code) {
    return axios.post(`${url}/register/github`, { code: code },
      { headers: { 'content-type': 'application/json' } })
  },
  register_kcash (code, addr, invitation) {
    return axios.post(`${url}/register/kcash`, { code: code, addr: addr, invite: invitation },
      { headers: { 'content-type': 'application/json' } })
  },
  setup_planet (option) {
    return axios.post(`${url}/user/planet`, {
      name: option.name,
      description: option.description,
      demo_url: option.demo,
      github_url: option.git,
      team_intro: option.team,
      email: option.email,
      keywords: option.keywords
    }, {
      headers: {
        'content-type': 'application/json',
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  send_feedback (option) {
    return axios.post(`${url}/feedback`, {
      content: option.comment,
      title: option.title,
      type: option.type,
      email: option.email
    }, {
      headers: {
        'content-type': 'application/json',
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  build (pname, dnum) {
    return axios.post(`${url}/user/build`, {
      planet_name: pname,
      dust_num: dnum
    }, {
      headers: {
        'content-type': 'application/json',
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  get_dust () {
    return axios.post(`${url}/user/get-dust`, null, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  notification (uid) {
    return axios.get(`${url}/notifications/${uid}`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  owned_planets (name) {
    return axios.get(`${url}/hacker/owned-planets/${name}`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  builded_planets (name) {
    return axios.get(`${url}/hacker/builded-planets/${name}`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  posted_rewards () {
    return axios.get(`${url}/hacker/posted-rewards`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  profile_main () {
    return axios.get(`${url}/profile/main`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  upload_info (formData) {
    return axios.post(`${url}/user/upload-info`, formData, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  upload_project (formData) {
    return axios.post(`${url}/user/up-project`, formData, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  check_team () {
    return axios.get(`${url}/user/check-team`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  hacker (name) {
    return axios.get(`${url}/hacker/${name}`)
  },
  planets_one (name) {
    return axios.get(`${url}/planets/one/${name}`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  github_contributors () {
    return axios.get(`${url}/`)
  },
  bounty_setup (option) {
    return axios.post(`${url}/user/bounty`, {
      name: option.name,
      description: option.description,
      keywords: option.keywords,
      email: option.email
    }, {
      headers: {
        'content-type': 'application/json',
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  participants (role) {
    return axios.get(`${url}/team/attenders/${role}`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  }
}
