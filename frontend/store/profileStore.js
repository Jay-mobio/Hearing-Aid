import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
// import { getProfileDetail } from '../../supabase/api/profile_detail';
// import { updateUserData } from '../../supabase/api/user_management';
import { message } from 'antd';
// import { supabase } from '../../supabase/supabase';

const store = (set) => ({
  getProfileData: null,
  setProfile: async () => {
    console.log("setProfile called..");
    // try {
    //   const userId = localStorage.getItem('isSessionID');
    //   const response = await getProfileDetail({ userid: userId });
    //   localStorage.setItem('userLoggedinId', response?.data?.[0]?.id);
    //   if (response.success) {
    //     set(() => ({
    //       getProfileData: response?.data,
    //     }));
    //     return true;
    //   }
    // } catch (error) {
    //   return false;
    // }
  },
  updateProfile: async (updateData) => {
    console.log("updateProfile called,,,");
    // try {
    //   const userid = localStorage.getItem('isSessionID');

    //   const response = await updateUserData(updateData, userid);
    //   if (response.success) {
    //     message.success(response.message);
    //     return true;
    //   }
    // } catch (error) {
    //   message.error(error);
    //   return false;
    // }
  },
  profileChannel: async (tableName) => {
    // supabase
    //   .channel('profile_channel')
    //   .on(
    //     'postgres_changes',
    //     {
    //       event: '*',
    //       schema: process.env.NEXT_PUBLIC_DB_SCHEMA,
    //       table: tableName,
    //     },
    //     async (event) => {
    //       if (event.table === tableName) {
    //         const userId = localStorage.getItem('isSessionID');
    //         const response = await getProfileDetail({ userid: userId });
    //         localStorage.setItem('userLoggedinId', response?.data?.[0]?.id);
    //         if (event.eventType === 'UPDATE') {
    //           set(() => ({
    //             getProfileData: response?.data,
    //           }));
    //         }
    //       }
    //     }
    //   )
    //   .subscribe();
    console.log("subscription");
  },
});
const profileStore = create(devtools(store));
export default profileStore;
