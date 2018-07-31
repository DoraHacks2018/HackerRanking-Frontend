import Vue from 'vue'
import Router from 'vue-router'

import Home1 from '@/components/Home1'
import Detail from '@/components/Detail'
import Participants from '@/components/Participants'
import Team from '@/components/Team'
import UpdateProject from '@/components/UpdateProject'
import Ranking from '@/components/Ranking'
import UploadInfo from '@/components/UploadInfo'
import ProfileProject from '@/components/ProfileProject'
import ProfileGithub from '@/components/ProfileGithub'
import ProfileHackathon from '@/components/ProfileHackathon'
import ProfileInvested from '@/components/ProfileInvested'
import TeamCompleted from '@/components/TeamCompleted'
import TeamBuild from '@/components/TeamBuild'
import TrueChain from '@/components/TrueChain'
import NKN from '@/components/NKN'
import Hackers from '@/components/Hackers'
import ProfileEdit from '@/components/ProfileEdit'
import HackerGithub from '@/components/HackerGithub'
import Blockchain from '@/components/Blockchain'
import BlockchainBonus from '@/components/BlockchainBonus'
import ResetPassword from '@/components/ResetPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/resetpasswd',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/hackers',
      name: 'Hackers',
      component: Hackers
    },
    {
      path: '/hacker',
      name: 'HackerGithub',
      component: HackerGithub
    },
    {
      path: '/',
      name: 'Home1',
      component: Home1
    },
    {
      path: '/hackathon/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/hackathon/blockchain',
      name: 'Blockchain',
      component: Blockchain
    },
    {
      path: '/hackathon/blockchain/bonus',
      name: 'BlockchainBonus',
      component: BlockchainBonus
    },
    {
      path: '/hackathon/participants',
      name: 'Participants',
      component: Participants
    },
    {
      path: '/hackathon/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/hackathon/team/completed',
      name: 'TeamCompleted',
      component: TeamCompleted
    },
    {
      path: '/hackathon/team/build',
      name: 'TeamBuild',
      component: TeamBuild
    },
    {
      path: '/hackathon/update',
      name: 'UpdateProject',
      component: UpdateProject
    },
    {
      path: '/hackathon/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/hackathon/upload-info',
      name: 'UploadInfo',
      component: UploadInfo
    },
    {
      path: '/profile/edit',
      name: 'ProfileEdit',
      component: ProfileEdit
    },
    {
      path: '/profile/project',
      name: 'ProfileProject',
      component: ProfileProject
    },
    {
      path: '/profile/hackathon',
      name: 'ProfileHackathon',
      component: ProfileHackathon
    },
    {
      path: '/profile/invested',
      name: 'ProfileInvested',
      component: ProfileInvested
    },
    {
      path: '/profile/github',
      name: 'ProfileGithub',
      component: ProfileGithub
    },
    {
      path: '/partner/truechain',
      name: 'TrueChain',
      component: TrueChain
    },
    {
      path: '/partner/nkn',
      name: 'NKN',
      component: NKN
    },
    {
      path: '/projects',
      name: 'Project',
      component: Ranking
    },
  ]
})
