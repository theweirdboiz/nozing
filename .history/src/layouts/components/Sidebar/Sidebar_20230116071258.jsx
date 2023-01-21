import React from "react";

import Brand from "@components/Brand";
import Navbar from "@layouts/components/Sidebar/components/Navbar";

const Sidebar = () => {
  const navbar1 = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mar-r-10"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.41666 2.29166C5.07148 2.29166 4.79166 2.57148 4.79166 2.91666C4.79166 3.26183 5.07148 3.54166 5.41666 3.54166H14.5833C14.9285 3.54166 15.2083 3.26183 15.2083 2.91666C15.2083 2.57148 14.9285 2.29166 14.5833 2.29166H5.41666ZM2.5 8.33333C2.5 6.60744 3.89911 5.20833 5.625 5.20833H14.375C16.1009 5.20833 17.5 6.60744 17.5 8.33333V14.1667C17.5 15.8925 16.1009 17.2917 14.375 17.2917H5.625C3.89911 17.2917 2.5 15.8925 2.5 14.1667V8.33333ZM5.625 6.45833C4.58947 6.45833 3.75 7.29779 3.75 8.33333V14.1667C3.75 15.2022 4.58946 16.0417 5.625 16.0417H14.375C15.4105 16.0417 16.25 15.2022 16.25 14.1667V8.33333C16.25 7.29779 15.4105 6.45833 14.375 6.45833H5.625ZM12.5 7.3C11.3494 7.3 10.4166 8.23274 10.4166 9.38333V10.8832C10.1041 10.7235 9.75006 10.6333 9.37496 10.6333C8.10931 10.6333 7.0833 11.6594 7.0833 12.925C7.0833 14.1907 8.10931 15.2167 9.37496 15.2167C10.5759 15.2167 11.561 14.293 11.6587 13.1173C11.6639 13.0847 11.6666 13.0513 11.6666 13.0173V9.38333C11.6666 8.92309 12.0397 8.55 12.5 8.55H13.2291C13.5743 8.55 13.8541 8.27018 13.8541 7.925C13.8541 7.57982 13.5743 7.3 13.2291 7.3H12.5ZM8.3333 12.925C8.3333 12.3497 8.79967 11.8833 9.37496 11.8833C9.95026 11.8833 10.4166 12.3497 10.4166 12.925C10.4166 13.5003 9.95026 13.9667 9.37496 13.9667C8.79967 13.9667 8.3333 13.5003 8.3333 12.925Z"
          ></path>
        </svg>
      ),
      name: "Cá Nhân",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mar-r-10"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.70831 9.99998C2.70831 5.9729 5.9729 2.70831 9.99997 2.70831C14.027 2.70831 17.2916 5.9729 17.2916 9.99998C17.2916 14.0271 14.027 17.2916 9.99997 17.2916C5.9729 17.2916 2.70831 14.0271 2.70831 9.99998ZM9.99997 1.45832C5.28254 1.45832 1.45831 5.28255 1.45831 9.99998C1.45831 14.7174 5.28254 18.5416 9.99997 18.5416C14.7174 18.5416 18.5416 14.7174 18.5416 9.99998C18.5416 5.28255 14.7174 1.45832 9.99997 1.45832ZM7.70832 9.99999C7.70832 8.73433 8.73433 7.70832 9.99998 7.70832C11.2656 7.70832 12.2916 8.73433 12.2916 9.99999C12.2916 11.2656 11.2656 12.2917 9.99998 12.2917C8.73433 12.2917 7.70832 11.2656 7.70832 9.99999ZM9.99998 6.45832C8.04397 6.45832 6.45832 8.04398 6.45832 9.99999C6.45832 11.956 8.04397 13.5417 9.99998 13.5417C11.956 13.5417 13.5416 11.956 13.5416 9.99999C13.5416 8.04398 11.956 6.45832 9.99998 6.45832Z"
          ></path>
        </svg>
      ),
      name: "Khám Phá",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mar-r-10"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.46731 9.60671C1.67382 5.07145 5.41552 1.45831 10.0015 1.45831C11.7132 1.45831 13.3091 1.96239 14.6466 2.83038C14.9361 3.01829 15.0185 3.40535 14.8306 3.6949C14.6427 3.98444 14.2556 4.06683 13.9661 3.87892C12.8251 3.13843 11.4645 2.70831 10.0015 2.70831C6.08683 2.70831 2.89227 5.79279 2.71601 9.66357C2.70031 10.0084 2.40805 10.2752 2.06323 10.2595C1.71841 10.2438 1.45161 9.95153 1.46731 9.60671ZM17.9396 9.73926C18.2844 9.75478 18.5513 10.0469 18.5358 10.3917C18.3316 14.9291 14.5889 18.5446 10.0015 18.5446C8.24744 18.5446 6.61514 18.0154 5.2579 17.1077C4.97097 16.9158 4.89392 16.5277 5.08581 16.2407C5.27769 15.9538 5.66585 15.8768 5.95278 16.0687C7.11078 16.8431 8.50244 17.2946 10.0015 17.2946C13.9174 17.2946 17.1128 14.2081 17.2871 10.3355C17.3026 9.9907 17.5947 9.72374 17.9396 9.73926ZM17.2946 6.71652C17.2946 6.16877 16.8505 5.72474 16.3028 5.72474C15.755 5.72474 15.311 6.16877 15.311 6.71652C15.311 7.26427 15.755 7.7083 16.3028 7.7083C16.8505 7.7083 17.2946 7.26427 17.2946 6.71652ZM16.3028 4.47474C17.5409 4.47474 18.5446 5.47842 18.5446 6.71652C18.5446 7.95462 17.5409 8.9583 16.3028 8.9583C15.9339 8.9583 15.5859 8.86923 15.279 8.71142L12.9236 12.0926C12.8178 12.2444 12.6502 12.3415 12.466 12.3579C12.2817 12.3742 12.0996 12.3081 11.9688 12.1773L11.1364 11.3449L10.188 12.7668C10.0755 12.9355 9.88811 13.0392 9.6854 13.0448C9.48268 13.0504 9.28984 12.9573 9.16814 12.7951L7.54354 10.6298L5.65318 12.5201C5.62653 12.5468 5.59807 12.5705 5.5682 12.5913C5.66913 12.8394 5.72474 13.1107 5.72474 13.3949C5.72474 14.5731 4.76967 15.5281 3.59153 15.5281C2.41339 15.5281 1.45831 14.5731 1.45831 13.3949C1.45831 12.2168 2.41339 11.2617 3.59153 11.2617C4.03211 11.2617 4.44149 11.3953 4.7814 11.6241L7.16913 9.2364C7.29723 9.1083 7.47462 9.04208 7.65533 9.05491C7.83603 9.06774 8.00229 9.15834 8.11101 9.30326L9.63808 11.3386L10.5194 10.0172C10.6233 9.86145 10.7916 9.76047 10.9779 9.74204C11.1642 9.72361 11.349 9.78968 11.4813 9.92206L12.3247 10.7654L14.3625 7.84021C14.1708 7.50984 14.061 7.126 14.061 6.71652C14.061 5.47842 15.0647 4.47474 16.3028 4.47474ZM3.59153 12.5117C4.07931 12.5117 4.47474 12.9071 4.47474 13.3949C4.47474 13.8827 4.07931 14.2781 3.59153 14.2781C3.10374 14.2781 2.70831 13.8827 2.70831 13.3949C2.70831 12.9071 3.10374 12.5117 3.59153 12.5117Z"
          ></path>
        </svg>
      ),
      name: "#zingchart",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mar-r-10"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.89354 2.23314C9.92588 2.5768 9.67351 2.88161 9.32985 2.91395C5.73344 3.25241 2.91669 6.28764 2.91669 9.98335C2.91669 13.9063 6.08978 17.0842 10.0012 17.0842C13.9126 17.0842 17.0857 13.9063 17.0857 9.98335C17.0857 8.64722 16.7181 7.39911 16.0792 6.33293C15.9018 6.03684 15.998 5.65298 16.2941 5.47555C16.5902 5.29813 16.974 5.39432 17.1515 5.69041C17.9035 6.94541 18.3357 8.41479 18.3357 9.98335C18.3357 14.5941 14.6055 18.3342 10.0012 18.3342C5.39694 18.3342 1.66669 14.5941 1.66669 9.98335C1.66669 5.63873 4.9781 2.06798 9.21272 1.66945C9.55638 1.63711 9.86119 1.88948 9.89354 2.23314ZM9.888 5.16111C9.94053 5.50227 9.70655 5.82142 9.3654 5.87395C7.37765 6.18003 5.8535 7.90296 5.8535 9.98317C5.8535 11.1398 6.3238 12.1849 7.08437 12.9391C7.32947 13.1821 7.33114 13.5779 7.08809 13.823C6.84504 14.0681 6.44932 14.0697 6.20422 13.8267C5.21637 12.8472 4.6035 11.4862 4.6035 9.98317C4.6035 7.27863 6.58507 5.03735 9.17516 4.63851C9.51631 4.58598 9.83546 4.81996 9.888 5.16111ZM13.9577 7.23583C14.2645 7.07768 14.6415 7.19821 14.7996 7.50503C15.1826 8.24813 15.3986 9.09131 15.3986 9.98317C15.3986 12.9685 12.9833 15.3908 10.0011 15.3908C9.65588 15.3908 9.37606 15.111 9.37606 14.7658C9.37606 14.4206 9.65588 14.1408 10.0011 14.1408C12.2904 14.1408 14.1486 12.2806 14.1486 9.98317C14.1486 9.29509 13.9824 8.64781 13.6885 8.07772C13.5304 7.7709 13.6509 7.39397 13.9577 7.23583ZM11.9823 1.86989C11.647 1.78796 11.3087 1.99337 11.2268 2.32868C11.2095 2.39926 11.205 2.46996 11.2118 2.53838V7.83719C10.8544 7.63452 10.4414 7.51878 10.0011 7.51878C8.64088 7.51878 7.54048 8.62341 7.54048 9.98326C7.54048 11.3431 8.64088 12.4477 10.0011 12.4477C11.3613 12.4477 12.4617 11.3431 12.4617 9.98326C12.4617 9.95673 12.4613 9.9303 12.4604 9.90398C12.4613 9.8904 12.4618 9.8767 12.4618 9.8629V3.32221C13.1239 3.56802 13.7396 3.91035 14.292 4.33243C14.5663 4.54201 14.9585 4.48956 15.1681 4.21528C15.3777 3.94101 15.3252 3.54877 15.051 3.3392C14.1541 2.65392 13.1137 2.14635 11.9823 1.86989ZM10.0011 8.76878C9.33373 8.76878 8.79048 9.31128 8.79048 9.98326C8.79048 10.6552 9.33373 11.1977 10.0011 11.1977C10.6684 11.1977 11.2117 10.6552 11.2117 9.98326C11.2117 9.31128 10.6684 8.76878 10.0011 8.76878Z"
          ></path>
        </svg>
      ),
      name: "Radio",
      imageLink:
        "https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mar-r-10"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.62494 2.5C3.89905 2.5 2.49994 3.89911 2.49994 5.625V14.372C2.49994 16.0979 3.89905 17.497 5.62494 17.497H14.3719C16.0978 17.497 17.4969 16.0979 17.4969 14.372V5.625C17.4969 3.89911 16.0978 2.5 14.3719 2.5H5.62494ZM3.74994 5.625C3.74994 4.58946 4.5894 3.75 5.62494 3.75H14.3719C15.4075 3.75 16.2469 4.58946 16.2469 5.625V14.372C16.2469 15.4075 15.4075 16.247 14.3719 16.247H5.62494C4.5894 16.247 3.74994 15.4075 3.74994 14.372V5.625ZM5.83334 4.99998C5.48816 4.99998 5.20834 5.2798 5.20834 5.62498C5.20834 5.97016 5.48816 6.24998 5.83334 6.24998H10C10.3452 6.24998 10.625 5.97016 10.625 5.62498C10.625 5.2798 10.3452 4.99998 10 4.99998H5.83334ZM5.20834 8.12497C5.20834 7.77979 5.48816 7.49997 5.83334 7.49997H14.1667C14.5118 7.49997 14.7917 7.77979 14.7917 8.12497C14.7917 8.47015 14.5118 8.74997 14.1667 8.74997H5.83334C5.48816 8.74997 5.20834 8.47015 5.20834 8.12497ZM6.66667 10.2083C5.86125 10.2083 5.20834 10.8612 5.20834 11.6667V13.3333C5.20834 14.1387 5.86125 14.7917 6.66667 14.7917H13.3333C14.1387 14.7917 14.7917 14.1387 14.7917 13.3333V11.6667C14.7917 10.8612 14.1387 10.2083 13.3333 10.2083H6.66667ZM6.45834 11.6667C6.45834 11.5516 6.55161 11.4583 6.66667 11.4583H13.3333C13.4484 11.4583 13.5417 11.5516 13.5417 11.6667V13.3333C13.5417 13.4484 13.4484 13.5417 13.3333 13.5417H6.66667C6.55161 13.5417 6.45834 13.4484 6.45834 13.3333V11.6667Z"
          ></path>
        </svg>
      ),
      name: "Theo dõi",
    },
  ];
  const navbar2 = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="mar-r-10"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.7081 2.91666C17.7081 2.73624 17.6302 2.56463 17.4943 2.44594C17.3584 2.32725 17.1779 2.27308 16.9991 2.29734L10.0928 3.23457L10.0766 3.23699C8.54161 3.48647 7.29148 4.91079 7.29148 6.45832V12.0831C6.7692 11.6908 6.12 11.4583 5.4165 11.4583C3.69061 11.4583 2.2915 12.8574 2.2915 14.5833C2.2915 16.3092 3.69061 17.7083 5.4165 17.7083C7.14239 17.7083 8.5415 16.3092 8.5415 14.5833C8.5415 14.486 8.53705 14.3898 8.52835 14.2947C8.53696 14.2534 8.54148 14.2105 8.54148 14.1667V6.45832C8.54148 5.54773 9.32148 4.63027 10.2696 4.47203L16.4581 3.63221V10.4165C15.9359 10.0241 15.2866 9.79166 14.5831 9.79166C12.8572 9.79166 11.4581 11.1908 11.4581 12.9167C11.4581 14.6425 12.8572 16.0417 14.5831 16.0417C16.3066 16.0417 17.7042 14.6465 17.7081 12.924C17.7081 12.9215 17.7081 12.9191 17.7081 12.9167V2.91666ZM14.5831 11.0417C13.5476 11.0417 12.7081 11.8811 12.7081 12.9167C12.7081 13.9522 13.5476 14.7917 14.5831 14.7917C15.6186 14.7917 16.4581 13.9522 16.4581 12.9167C16.4581 11.8811 15.6186 11.0417 14.5831 11.0417ZM5.4165 12.7083C4.38097 12.7083 3.5415 13.5478 3.5415 14.5833C3.5415 15.6189 4.38097 16.4583 5.4165 16.4583C6.45204 16.4583 7.2915 15.6189 7.2915 14.5833C7.2915 13.5478 6.45204 12.7083 5.4165 12.7083Z"
          ></path>
        </svg>
      ),
      name: "Nhạc mới",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          class="mar-r-10"
        >
          <rect
            x="2.49994"
            y="2.5"
            width="6.31579"
            height="6.31579"
            rx="1.57895"
            stroke="currentColor"
            stroke-width="1.25"
          ></rect>
          <rect
            x="11.1841"
            y="2.5"
            width="6.31579"
            height="6.31579"
            rx="3.15789"
            stroke="currentColor"
            stroke-width="1.25"
          ></rect>
          <path
            d="M5.85362 17.2727C5.74625 17.3126 5.56941 17.3126 5.46204 17.2727C4.54625 16.9434 2.49994 15.5695 2.49994 13.241C2.49994 12.2132 3.28625 11.3816 4.25573 11.3816C4.83046 11.3816 5.33888 11.6743 5.65783 12.1267C5.97678 11.6743 6.48836 11.3816 7.05994 11.3816C8.02941 11.3816 8.81572 12.2132 8.81572 13.241C8.81572 15.5695 6.76941 16.9434 5.85362 17.2727Z"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11.9736 11.4563L11.9736 17.2279C11.9736 17.3491 12.1045 17.4251 12.2098 17.365L17.26 14.4792C17.3661 14.4186 17.3661 14.2656 17.26 14.205L12.2098 11.3192C12.1045 11.259 11.9736 11.335 11.9736 11.4563Z"
            stroke="currentColor"
            stroke-width="1.25"
          ></path>
        </svg>
      ),
    },
  ];
  return (
    <section className="fixed left-0 top-0 sidebar bg-sidebar-bg">
      <div className="px-[2.5rem]">
        <Brand />
        <Navbar navbarList={navbar1} />
        <div className="divide"></div>
        <div className="sidebar-scrollbar mt-4">
          <Navbar navbarList={navbar1} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;