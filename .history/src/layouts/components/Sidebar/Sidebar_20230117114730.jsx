import React from "react";

import Brand from "@components/Brand";
import Navbar from "@layouts/components/Sidebar/components/Navbar";
import LoginVipContainer from "@components/LoginVipContainer";

const Sidebar = () => {
  const container1 = {
    text: "Đăng nhập để khám phá playlist dành riêng cho bạn",
    buttonText: "ĐĂNG NHẬP",
    buttonBgColor: "",
    buttonColor: "",
    bgColor: "bg-purple-primary",
  };
  const container2 = {
    text: "Nghe nhạc không quảng cáo cùng kho nhạc VIP",
    buttonText: "Nâng cấp VIP",
    buttonBgColor: "bg-vip",
    buttonColor: "text-black",
    bgColor: "bg-gradient-vip",
    isVip: true,
  };
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
          className="mar-r-10"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
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
          className="mar-r-10"
        >
          <rect
            x="2.49994"
            y="2.5"
            width="6.31579"
            height="6.31579"
            rx="1.57895"
            stroke="currentColor"
            strokeWidth="1.25"
          ></rect>
          <rect
            x="11.1841"
            y="2.5"
            width="6.31579"
            height="6.31579"
            rx="3.15789"
            stroke="currentColor"
            strokeWidth="1.25"
          ></rect>
          <path
            d="M5.85362 17.2727C5.74625 17.3126 5.56941 17.3126 5.46204 17.2727C4.54625 16.9434 2.49994 15.5695 2.49994 13.241C2.49994 12.2132 3.28625 11.3816 4.25573 11.3816C4.83046 11.3816 5.33888 11.6743 5.65783 12.1267C5.97678 11.6743 6.48836 11.3816 7.05994 11.3816C8.02941 11.3816 8.81572 12.2132 8.81572 13.241C8.81572 15.5695 6.76941 16.9434 5.85362 17.2727Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11.9736 11.4563L11.9736 17.2279C11.9736 17.3491 12.1045 17.4251 12.2098 17.365L17.26 14.4792C17.3661 14.4186 17.3661 14.2656 17.26 14.205L12.2098 11.3192C12.1045 11.259 11.9736 11.335 11.9736 11.4563Z"
            stroke="currentColor"
            strokeWidth="1.25"
          ></path>
        </svg>
      ),
      name: "Thể loại",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="mar-r-10"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99995 14.1666L5.84903 16.3489C5.54335 16.5096 5.18609 16.2501 5.24446 15.9097L6.03722 11.2876L2.67905 8.01415C2.43175 7.77309 2.56821 7.3531 2.90997 7.30344L7.55085 6.62908L9.62631 2.42373C9.77915 2.11405 10.2208 2.11405 10.3736 2.42373L12.4491 6.62908L17.0899 7.30344C17.4317 7.3531 17.5682 7.77309 17.3209 8.01415L13.9627 11.2876L14.7554 15.9097C14.8138 16.2501 14.4566 16.5096 14.1509 16.3489L9.99995 14.1666Z"
            stroke="currentColor"
            strokeWidth="1.25"
          ></path>
        </svg>
      ),
      name: "Top 100",
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
            d="M9.99991 4.375C8.4965 4.375 6.99079 4.42069 5.75263 4.47353C4.73349 4.51703 4.39788 4.54283 4.067 4.707C3.79604 4.84144 3.4637 5.14441 3.30483 5.40181C3.10952 5.71825 3.05877 6.01406 2.93416 6.9311C2.80727 7.86492 2.70825 8.93595 2.70825 10C2.70825 11.064 2.80727 12.1351 2.93416 13.0689C3.05877 13.9859 3.10952 14.2817 3.30483 14.5982C3.4637 14.8556 3.79604 15.1585 4.067 15.293C4.39788 15.4572 4.73349 15.483 5.75263 15.5265C6.99079 15.5793 8.4965 15.625 9.99991 15.625C11.5033 15.625 13.009 15.5793 14.2472 15.5265C15.2663 15.483 15.6019 15.4572 15.9328 15.293C16.2038 15.1585 16.5361 14.8556 16.695 14.5982C16.8903 14.2817 16.9411 13.9859 17.0657 13.0689C17.1926 12.1351 17.2916 11.064 17.2916 10C17.2916 8.93595 17.1926 7.86492 17.0657 6.9311C16.9411 6.01406 16.8903 5.71825 16.695 5.40181C16.5361 5.14441 16.2038 4.84144 15.9328 4.707C15.6019 4.54283 15.2663 4.51703 14.2472 4.47353C13.009 4.42069 11.5033 4.375 9.99991 4.375ZM5.69933 3.22467C6.94847 3.17136 8.47304 3.125 9.99991 3.125C11.5268 3.125 13.0514 3.17136 14.3005 3.22467C14.3361 3.22619 14.3712 3.22767 14.4059 3.22914C15.2793 3.266 15.8931 3.2919 16.4884 3.58726C16.9687 3.82557 17.4771 4.28901 17.7587 4.74528C18.1076 5.31051 18.1841 5.8756 18.2923 6.67449C18.2963 6.70361 18.3002 6.73303 18.3043 6.76279C18.4361 7.7331 18.5416 8.86306 18.5416 10C18.5416 11.1369 18.4361 12.2669 18.3043 13.2372C18.3002 13.267 18.2963 13.2964 18.2923 13.3255C18.1841 14.1244 18.1076 14.6895 17.7587 15.2547C17.4771 15.711 16.9687 16.1744 16.4884 16.4127C15.8931 16.7081 15.2793 16.734 14.4059 16.7709C14.3712 16.7723 14.3361 16.7738 14.3005 16.7753C13.0514 16.8286 11.5268 16.875 9.99991 16.875C8.47304 16.875 6.94847 16.8286 5.69933 16.7753C5.66377 16.7738 5.62864 16.7723 5.59392 16.7709C4.72048 16.734 4.10668 16.7081 3.51142 16.4127C3.03112 16.1744 2.52274 15.711 2.24113 15.2547C1.89226 14.6895 1.81572 14.1244 1.70752 13.3255C1.70358 13.2964 1.69959 13.267 1.69555 13.2372C1.56369 12.2669 1.45825 11.1369 1.45825 10C1.45825 8.86306 1.56369 7.7331 1.69555 6.76279C1.69959 6.73303 1.70358 6.7036 1.70752 6.67447C1.81572 5.8756 1.89226 5.3105 2.24113 4.74528C2.52274 4.28901 3.03112 3.82557 3.51142 3.58726C4.10668 3.2919 4.72048 3.266 5.59392 3.22914C5.62864 3.22767 5.66377 3.22619 5.69933 3.22467Z"
          ></path>
          <path d="M5.00418 7.7425C5.07418 7.7425 5.14668 7.7625 5.22168 7.8025C5.30168 7.8375 5.36168 7.885 5.40168 7.945L7.22417 10.75L6.84917 10.735L8.71667 7.945C8.81167 7.81 8.93417 7.7425 9.08417 7.7425C9.20417 7.7425 9.31167 7.785 9.40667 7.87C9.50167 7.955 9.54917 8.065 9.54917 8.2V12.5425C9.54917 12.6725 9.50667 12.7825 9.42167 12.8725C9.33667 12.9575 9.22417 13 9.08417 13C8.94417 13 8.82917 12.9575 8.73917 12.8725C8.65417 12.7825 8.61167 12.6725 8.61167 12.5425V9.01L8.90417 9.0775L7.37417 11.41C7.32917 11.465 7.27167 11.5125 7.20167 11.5525C7.13667 11.5925 7.06917 11.61 6.99917 11.605C6.93417 11.61 6.86667 11.5925 6.79667 11.5525C6.73167 11.5125 6.67667 11.465 6.63167 11.41L5.19918 9.145L5.39418 8.7475V12.5425C5.39418 12.6725 5.35418 12.7825 5.27418 12.8725C5.19418 12.9575 5.08918 13 4.95918 13C4.83418 13 4.73168 12.9575 4.65168 12.8725C4.57168 12.7825 4.53168 12.6725 4.53168 12.5425V8.2C4.53168 8.075 4.57668 7.9675 4.66668 7.8775C4.76168 7.7875 4.87418 7.7425 5.00418 7.7425ZM15.3425 7.735C15.4675 7.735 15.575 7.7775 15.665 7.8625C15.76 7.9425 15.8075 8.045 15.8075 8.17C15.8075 8.235 15.7925 8.3025 15.7625 8.3725L13.91 12.7075C13.865 12.8075 13.8 12.8825 13.715 12.9325C13.635 12.9775 13.5525 13 13.4675 13C13.3875 12.995 13.31 12.97 13.235 12.925C13.16 12.875 13.1025 12.805 13.0625 12.715L11.21 8.365C11.195 8.335 11.185 8.305 11.18 8.275C11.175 8.24 11.1725 8.2075 11.1725 8.1775C11.1725 8.0325 11.225 7.9225 11.33 7.8475C11.435 7.7675 11.535 7.7275 11.63 7.7275C11.82 7.7275 11.9575 7.825 12.0425 8.02L13.685 11.8825L13.4225 11.89L14.93 8.02C15.015 7.83 15.1525 7.735 15.3425 7.735Z"></path>
          <path d="M5.22168 7.8025L5.14301 7.95L5.15487 7.9552L5.22168 7.8025ZM5.40168 7.945L5.54144 7.85419L5.54035 7.85255L5.40168 7.945ZM7.22417 10.75L7.21751 10.9165L7.5395 10.9294L7.36393 10.6592L7.22417 10.75ZM6.84917 10.735L6.71067 10.6423L6.54511 10.8896L6.84251 10.9015L6.84917 10.735ZM8.71667 7.945L8.58034 7.84906L8.57817 7.8523L8.71667 7.945ZM9.40667 7.87L9.29554 7.99421L9.29554 7.99421L9.40667 7.87ZM9.42167 12.8725L9.53957 12.9904L9.54284 12.9869L9.42167 12.8725ZM8.73917 12.8725L8.61781 12.9871L8.62474 12.9937L8.73917 12.8725ZM8.61167 9.01L8.64915 8.8476L8.44501 8.80049V9.01H8.61167ZM8.90417 9.0775L9.04353 9.16892L9.17474 8.96889L8.94165 8.9151L8.90417 9.0775ZM7.37417 11.41L7.50317 11.5155L7.50872 11.5087L7.51354 11.5014L7.37417 11.41ZM7.20167 11.5525L7.11894 11.4077L7.11433 11.4106L7.20167 11.5525ZM6.99917 11.605L7.01105 11.4388L6.99872 11.4379L6.98639 11.4388L6.99917 11.605ZM6.79667 11.5525L6.70928 11.6945L6.71398 11.6972L6.79667 11.5525ZM6.63168 11.41L6.49082 11.4991L6.49625 11.5077L6.50268 11.5155L6.63168 11.41ZM5.19918 9.145L5.04954 9.0716L5.00848 9.1553L5.05832 9.23409L5.19918 9.145ZM5.39418 8.7475H5.56084L5.24454 8.6741L5.39418 8.7475ZM5.27418 12.8725L5.39559 12.9868L5.39874 12.9832L5.27418 12.8725ZM4.65168 12.8725L4.52706 12.9833L4.53031 12.9867L4.65168 12.8725ZM4.66668 7.8775L4.55201 7.75647L4.54882 7.75965L4.66668 7.8775ZM5.00418 7.90917C5.04155 7.90917 5.08726 7.9197 5.14324 7.94956L5.30011 7.65544C5.20609 7.6053 5.1068 7.57584 5.00418 7.57584V7.90917ZM5.15487 7.9552C5.21186 7.98013 5.24412 8.00913 5.263 8.03745L5.54035 7.85255C5.47923 7.76088 5.39149 7.69488 5.28848 7.64981L5.15487 7.9552ZM5.26192 8.03581L7.08442 10.8408L7.36393 10.6592L5.54143 7.8542L5.26192 8.03581ZM7.23084 10.5835L6.85584 10.5685L6.84251 10.9015L7.21751 10.9165L7.23084 10.5835ZM6.98768 10.8277L8.85518 8.03771L8.57817 7.8523L6.71067 10.6423L6.98768 10.8277ZM8.85297 8.04092C8.92042 7.94507 8.99448 7.90917 9.08417 7.90917V7.57584C8.87387 7.57584 8.70292 7.67494 8.58037 7.84909L8.85297 8.04092ZM9.08417 7.90917C9.16046 7.90917 9.22902 7.93469 9.29554 7.99421L9.51781 7.7458C9.39432 7.63531 9.24788 7.57584 9.08417 7.57584V7.90917ZM9.29554 7.99421C9.35291 8.04554 9.38251 8.10925 9.38251 8.2H9.71584C9.71584 8.02075 9.65043 7.86446 9.51781 7.7458L9.29554 7.99421ZM9.38251 8.2V12.5425H9.71584V8.2H9.38251ZM9.38251 12.5425C9.38251 12.6323 9.35471 12.7007 9.3005 12.7581L9.54284 12.9869C9.65864 12.8643 9.71584 12.7127 9.71584 12.5425H9.38251ZM9.30382 12.7546C9.25523 12.8032 9.18783 12.8333 9.08417 12.8333V13.1667C9.26051 13.1667 9.41812 13.1118 9.53952 12.9904L9.30382 12.7546ZM9.08417 12.8333C8.98071 12.8333 8.90856 12.8032 8.85361 12.7513L8.62474 12.9937C8.74979 13.1118 8.90764 13.1667 9.08417 13.1667V12.8333ZM8.86034 12.7581C8.80614 12.7007 8.77834 12.6323 8.77834 12.5425H8.44501C8.44501 12.7127 8.50221 12.8643 8.61801 12.9869L8.86034 12.7581ZM8.77834 12.5425V9.01H8.44501V12.5425H8.77834ZM8.5742 9.1724L8.8667 9.2399L8.94165 8.9151L8.64915 8.8476L8.5742 9.1724ZM8.76481 8.98609L7.23481 11.3186L7.51354 11.5014L9.04353 9.16892L8.76481 8.98609ZM7.24518 11.3045C7.21471 11.3417 7.17364 11.3766 7.11898 11.4078L7.28436 11.6972C7.3697 11.6484 7.44364 11.5883 7.50317 11.5155L7.24518 11.3045ZM7.11433 11.4106C7.0763 11.434 7.04317 11.4411 7.01105 11.4388L6.9873 11.7712C7.09518 11.7789 7.19705 11.751 7.28902 11.6944L7.11433 11.4106ZM6.98639 11.4388C6.96178 11.4407 6.92731 11.4352 6.87936 11.4078L6.71398 11.6972C6.80604 11.7498 6.90657 11.7793 7.01196 11.7712L6.98639 11.4388ZM6.88402 11.4106C6.83366 11.3796 6.79307 11.3441 6.76067 11.3045L6.50268 11.5155C6.56028 11.5859 6.62969 11.6454 6.70933 11.6944L6.88402 11.4106ZM6.77253 11.3209L5.34003 9.05592L5.05832 9.23409L6.49082 11.4991L6.77253 11.3209ZM5.34881 9.21841L5.54381 8.82091L5.24454 8.6741L5.04954 9.0716L5.34881 9.21841ZM5.22751 8.7475V12.5425H5.56084V8.7475H5.22751ZM5.22751 12.5425C5.22751 12.6352 5.20023 12.7048 5.14961 12.7618L5.39874 12.9832C5.50812 12.8602 5.56084 12.7098 5.56084 12.5425H5.22751ZM5.15281 12.7583C5.10806 12.8058 5.049 12.8333 4.95918 12.8333V13.1667C5.12935 13.1667 5.28029 13.1092 5.39554 12.9867L5.15281 12.7583ZM4.95918 12.8333C4.87649 12.8333 4.81914 12.8072 4.77304 12.7583L4.53031 12.9867C4.64422 13.1078 4.79186 13.1667 4.95918 13.1667V12.8333ZM4.77624 12.7618C4.72562 12.7048 4.69834 12.6352 4.69834 12.5425H4.36501C4.36501 12.7098 4.41774 12.8602 4.52711 12.9832L4.77624 12.7618ZM4.69834 12.5425V8.2H4.36501V12.5425H4.69834ZM4.69834 8.2C4.69834 8.1201 4.72514 8.05474 4.78453 7.99535L4.54882 7.75965C4.42821 7.88027 4.36501 8.0299 4.36501 8.2H4.69834ZM4.7813 7.99849C4.84557 7.93761 4.91713 7.90917 5.00418 7.90917V7.57584C4.83122 7.57584 4.67778 7.6374 4.55205 7.75651L4.7813 7.99849ZM15.665 7.8625L15.5504 7.98387L15.5577 7.98999L15.665 7.8625ZM15.7625 8.3725L15.6093 8.30685L15.6093 8.30701L15.7625 8.3725ZM13.91 12.7075L14.062 12.7759L14.0633 12.773L13.91 12.7075ZM13.715 12.9325L13.7967 13.0778L13.7995 13.0762L13.715 12.9325ZM13.4675 13L13.4571 13.1667H13.4675V13ZM13.235 12.925L13.1425 13.0638L13.1493 13.0679L13.235 12.925ZM13.0625 12.715L12.9092 12.7803L12.9102 12.7827L13.0625 12.715ZM11.21 8.365L11.3637 8.29958L11.3591 8.29047L11.21 8.365ZM11.18 8.275L11.015 8.29858L11.0156 8.3024L11.18 8.275ZM11.33 7.8475L11.4269 7.98319L11.431 7.98007L11.33 7.8475ZM12.0425 8.02L12.1959 7.95478L12.1953 7.9534L12.0425 8.02ZM13.685 11.8825L13.6898 12.0491L13.934 12.0421L13.8384 11.8173L13.685 11.8825ZM13.4225 11.89L13.2672 11.8295L13.176 12.0638L13.4273 12.0566L13.4225 11.89ZM14.93 8.02L14.7777 7.95186L14.7747 7.95951L14.93 8.02ZM15.3425 7.90167C15.4254 7.90167 15.4919 7.92821 15.5506 7.98367L15.7795 7.74133C15.6582 7.6268 15.5096 7.56834 15.3425 7.56834V7.90167ZM15.5577 7.98999C15.6148 8.03808 15.6409 8.0938 15.6409 8.17H15.9742C15.9742 7.99621 15.9053 7.84692 15.7724 7.73502L15.5577 7.98999ZM15.6409 8.17C15.6409 8.2089 15.6319 8.25408 15.6093 8.30685L15.9157 8.43816C15.9531 8.35093 15.9742 8.26111 15.9742 8.17H15.6409ZM15.6093 8.30701L13.7568 12.642L14.0633 12.773L15.9158 8.438L15.6093 8.30701ZM13.758 12.6391C13.7255 12.7113 13.6825 12.7583 13.6305 12.7888L13.7995 13.0762C13.9176 13.0067 14.0045 12.9037 14.062 12.7759L13.758 12.6391ZM13.6333 12.7872C13.5762 12.8194 13.5216 12.8333 13.4675 12.8333V13.1667C13.5834 13.1667 13.6938 13.1356 13.7967 13.0778L13.6333 12.7872ZM13.4779 12.8337C13.4269 12.8305 13.375 12.8146 13.3208 12.7821L13.1493 13.0679C13.245 13.1254 13.3481 13.1595 13.4571 13.1663L13.4779 12.8337ZM13.3275 12.7863C13.2812 12.7555 13.2432 12.7112 13.2148 12.6473L12.9102 12.7827C12.9618 12.8988 13.0389 12.9945 13.1426 13.0637L13.3275 12.7863ZM13.2159 12.6497L11.3634 8.2997L11.0567 8.4303L12.9092 12.7803L13.2159 12.6497ZM11.3591 8.29047C11.3508 8.27381 11.3464 8.25962 11.3444 8.2476L11.0156 8.3024C11.0236 8.35038 11.0393 8.39619 11.061 8.43954L11.3591 8.29047ZM11.345 8.25143C11.3409 8.2229 11.3392 8.19837 11.3392 8.1775H11.0059C11.0059 8.21663 11.0091 8.2571 11.015 8.29857L11.345 8.25143ZM11.3392 8.1775C11.3392 8.07862 11.3716 8.02261 11.4269 7.98312L11.2332 7.71188C11.0784 7.82239 11.0059 7.98639 11.0059 8.1775H11.3392ZM11.431 7.98007C11.5181 7.91375 11.5834 7.89417 11.63 7.89417V7.56084C11.4867 7.56084 11.352 7.62126 11.229 7.71493L11.431 7.98007ZM11.63 7.89417C11.6951 7.89417 11.7422 7.91031 11.7792 7.93658C11.8175 7.96373 11.8562 8.00971 11.8897 8.0866L12.1953 7.9534C12.1438 7.83529 12.0713 7.73503 11.9721 7.66467C11.8716 7.59345 11.755 7.56084 11.63 7.56084V7.89417ZM11.8891 8.08522L13.5316 11.9477L13.8384 11.8173L12.1959 7.95478L11.8891 8.08522ZM13.6803 11.7159L13.4178 11.7234L13.4273 12.0566L13.6898 12.0491L13.6803 11.7159ZM13.5778 11.9505L15.0853 8.0805L14.7747 7.95951L13.2672 11.8295L13.5778 11.9505ZM15.0822 8.08806C15.1152 8.01411 15.1535 7.96975 15.1916 7.94337C15.2288 7.91767 15.2766 7.90167 15.3425 7.90167V7.56834C15.2185 7.56834 15.1025 7.59983 15.0022 7.66913C14.9028 7.73776 14.8298 7.83589 14.7779 7.95194L15.0822 8.08806Z"></path>
        </svg>
      ),
      name: "MV",
    },
  ];
  return (
    <aside className="fixed left-0 top-0 sidebar bg-sidebar-bg">
      <div className="flex flex-col  h-full">
        <div className="pl-[2.5rem">
          <Brand />
          <Navbar navbarList={navbar1} />
          <div className="divide"></div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 mt-4 h-full overflow-y-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-lg">
            <div className="pl-[2.5rem]">
              <Navbar navbarList={navbar2} />
            </div>
            <div className=" pl-[2rem] pr-3">
              <LoginVipContainer container={container1} />
              <LoginVipContainer container={container2} />
            </div>
          </div>
        </div>
        <div className="h-[5.4rem] border-t-[1px] border-border-primary flex items-center flex-shrink-0 pl-[2.5rem] hover:text-[#ddd]">
          <button className="flex gap-x-3 border ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="font-semibold text-[14px]">Tạo playlist mới</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
