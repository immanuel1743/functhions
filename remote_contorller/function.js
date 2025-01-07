document.body.addEventListener("click", (event) => {
  if (event.target.matches(".btn, .hover-btn")) modalOpen(event.target);
  else if (event.target.matches(".close_btn")) modalClose(event.target);
});
const modalClose = (target) => {
  const modal = document.querySelectorAll(".modal"),
        dim = document.querySelector(".dim"),
        hiddenView = document.querySelector('.content-service-view'),
        getId = target.getAttribute('id').toLowerCase();

  document.body.style.overflow = "auto";
  hiddenView.setAttribute('aria-hidden', false);

  for (let i = 0; i < modal.length; i++) {
    const e = modal[i];
    animate_(e, "left", "100%");
  }

  dim.classList.remove("active");
  target.setAttribute('id', '');

  const afterFocus = document.getElementById(`${getId}`);
  afterFocus.focus();

  console.log(afterFocus);
};


const modalOpen = (target) => {
  const getId = target.getAttribute("id").toUpperCase(),
        getText = TEXT[getId].info,
        modal = document.querySelector('.modal'),
        modalTitle = document.querySelector(".modal_title"),
        modalDesc = document.querySelector(".modal_desc"),
        dim = document.querySelector('.dim'),
        closeButton = document.querySelector(".close_btn"),
        hiddenView = document.querySelector('.content-service-view');

  modalTitle.innerHTML = getText.title
  modalDesc.innerHTML = getText.desc;
  dim.classList.add("active");
  animate_(modal, "left", "0");
  closeButton.setAttribute("id", getId);
  document.body.style.overflow = "hidden";
  hiddenView.setAttribute('aria-hidden', true);

  target.blur();
  closeButton.focus();
};

const animate_ = (el, direction, value) => {
  const frame = () => {
    if (value === 0 || value === "0")
      el.style.cssText = `${direction}: ${value};`;
    else el.style.cssText = `${direction}: ${value};`;
  };
  frame();
};

const TEXT = {
  1: {
    id: "1",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  2: {
    id: "2",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  3: {
    id: "4",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  4: {
    id: "4",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  5: {
    id: "5",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  6: {
    id: "6",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  7: {
    id: "7",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  8: {
    id: "8",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  9: {
    id: "9",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  0: {
    id: "0",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  MENU: {
    id: "MENU",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  EXTRA: {
    id: "EXTRA",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  PLUS: {
    id: "PLUS",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  MINUS: {
    id: "MINUS",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  MUTE: {
    id: "MUTE",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  "ARROW-UP": {
    id: "ARROW-UP",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  "ARROW-DOWN": {
    id: "ARROW-DOWN",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  HOME: {
    id: "HOME",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  MIC: {
    id: "MIC",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  SOCKET: {
    id: "SOCKET",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  SCROLL: {
    id: "SCROLL",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  BACK: {
    id: "BACK",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  SETTING: {
    id: "SETTING",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  SOCKET: {
    id: "SOCKET",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  RED: {
    id: "RED",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  GREEN: {
    id: "GREEN",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  YELLOW: {
    id: "YELLOW",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  BLUE: {
    id: "BLUE",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  NETFLIX: {
    id: "NETFLIX",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  PRIME: {
    id: "PRIME",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  DISNEY: {
    id: "DISNEY",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  WAVVE: {
    id: "WAVVE",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  COUPANG: {
    id: "COUPANG",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
  AMAZON: {
    id: "AMAZON",
    info: {
      title: "title",
      img: true,
      src: "",
      desc: "desc",
    },
  },
};
