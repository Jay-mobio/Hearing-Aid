import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
// import { resetPassword, signInUser, updateUserPassword } from '../../supabase/api/auth';
import { message } from 'antd';
// import { getSession } from '../../supabase/api/db_operations';

const store = (set) => ({
  loginData: null,
  sessionData: null,
  setLogin: async (username, password) => {
    console.log("setLogin Called...");
    // try {
    //   const response = await signInUser(username, password);
    //   if (response.success) {
    //     message.success(response.message);
    //     localStorage.setItem('isLogin', true);
    //     set(() => ({
    //       loginData: response.data,
    //     }));
    //     return true;
    //   } else {
    //     message.error(response.message);
    //     return false;
    //   }
    // } catch (error) {
    //   message.error(error);
    //   return false;
    // }
  },
  setForgot: async (email) => {
    console.log("setForgot called...");
    // try {
    //   const response = await resetPassword(email);
    //   if (response.success) {
    //     message.success(response.message);
    //     return true;
    //   } else {
    //     message.error(response.message);
    //     return false;
    //   }
    // } catch (error) {
    //   message.error(error);
    //   return false;
    // }
  },
  setReset: async (newPassword) => {
    console.log("setReset called..");
    // try {
    //   const response = await updateUserPassword(newPassword);
    //   if (response.success) {
    //     message.success(response.message);
    //     return true;
    //   } else {
    //     message.error(response.message);
    //     return false;
    //   }
    // } catch (error) {
    //   message.error(error);
    //   return false;
    // }
  },
  setSession: async () => {
    console.log("setSession called");
    // try {
    //   const response = await getSession();
    //   if (response.success) {
    //     localStorage.setItem('isSessionID', response?.data?.session?.user?.id);
    //     set(() => ({
    //       sessionData: response.data,
    //     }));
    //     return true;
    //   } else {
    //     message.error(response.message);
    //     return false;
    //   }
    // } catch (error) {
    //   message.error(error);
    // }
  },
});
const authStore = create(devtools(store));
export default authStore;
