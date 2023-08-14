import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
   state: () => ({
      orgId: '',
      orgName: '',
      fullName: '',
      userId: '',
      avatar: '',
      allowMenus: [],
   }),
   getters: {
      getOrgId: (state) => state.orgId,
      getOrgName: (state) => state.orgName,
      getFullName: (state) => state.fullName,
      getUserId: (state) => state.userId,
      getAvatar: (state) => state.avatar,
      getMenus: (state) => state.allowMenus,
   },
   actions: {
      setUser(userInfo) {
         this.fullName = userInfo.fullname;
         this.userId = userInfo.id;
         this.avatar = userInfo.avatar;
      },
      setMenus(menus) {},
   },
});
