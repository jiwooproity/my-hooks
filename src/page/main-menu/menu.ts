interface MenuListIF {
  label: string;
  link: string;
}

const menuList: MenuListIF[] = [
  {
    label: "useLoading",
    link: "use-loading",
  },
  {
    label: "useLocalStorage",
    link: "use-local-storage",
  },
  {
    label: "useAudio",
    link: "use-audio",
  },
  {
    label: "useUserAgent",
    link: "use-useragent",
  },
  {
    label: "useTyping",
    link: "use-typing",
  },
  {
    label: "useIdle",
    link: "use-idle",
  },
  {
    label: "useRealTime",
    link: "use-real-time",
  },
];

export default menuList;
