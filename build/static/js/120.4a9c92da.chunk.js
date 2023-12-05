"use strict";
(self.webpackChunkjaguarshop_duantn =
  self.webpackChunkjaguarshop_duantn || []).push([
  [120],
  {
    6120: (e, r, t) => {
      t.r(r), t.d(r, { default: () => m });
      var i = t(2791),
        o = t(824),
        s = t(9589),
        n = t(6640),
        a = t(884),
        c = t(6582),
        l = t(1218),
        d = t(9705),
        x = (t(7548), t(8832), t(6736), t(5294)),
        p = t(1087),
        h = t(6666),
        g = t.n(h),
        u = (t(1380), t(184));
      const m = (e) => {
        let { type: r, heading: t } = e;
        const [h, m] = (0, i.useState)({ gio: 0, phut: 0, giay: 0 }),
          [f, j] = (0, i.useState)([]);
        (0, i.useEffect)(() => {
          const e = new Date();
          e.setHours(23), e.setMinutes(59), e.setSeconds(59);
          const r = setInterval(() => {
            const t = new Date(),
              i = b(t, e);
            i.gio >= 0 && i.phut >= 0 && i.giay >= 0 ? m(i) : clearInterval(r);
          }, 1e3);
          return () => clearInterval(r);
        }, []);
        const b = (e, r) => {
          const t = Math.floor((r - e) / 1e3);
          return {
            gio: Math.floor(t / 3600),
            phut: Math.floor((t % 3600) / 60),
            giay: t % 60,
          };
        };
        (0, i.useEffect)(() => {
          w();
        }, []);
        const w = async () => {
            try {
              let e = await x.Z.get(
                "https://duantn-backend.onrender.com/products",
              );
              e.data && j(e.data || []);
            } catch (e) {}
          },
          y = f.filter((e) => e.prodSale > 0);
        return (0, u.jsxs)(o.xu, {
          justifyContent: "center",
          w: "80%",
          m: "auto",
          mt: "6",
          cursor: "pointer",
          textAlign: "center",
          backgroundColor: "black",
          borderRadius: "15px",
          children: [
            (0, u.jsxs)(s.X, {
              h: "auto",
              textAlign: "center",
              display: "flex",
              w: "100%",
              borderRadius: "15px",
              children: [
                (0, u.jsx)(o.xu, {
                  width: "100%",
                  children: (0, u.jsx)(n.E, {
                    borderRadius: "15px",
                    src: "https://cdn.tgdd.vn/2023/11/campaign/GIF-BF-DESK-1200x120.gif",
                    width: "100%",
                  }),
                }),
                (0, u.jsxs)(o.xu, {
                  mt: "6",
                  display: "flex",
                  mb: "1",
                  ml: "6",
                  style: { position: "absolute" },
                  children: [
                    (0, u.jsxs)(o.xu, {
                      mr: "4",
                      borderRadius: "20px",
                      children: [
                        " ",
                        (0, u.jsx)("img", {
                          width: "40px",
                          height: "75px",
                          src: "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/homev2/lightning-ic.png",
                        }),
                      ],
                    }),
                    (0, u.jsxs)(a.x, {
                      children: [
                        (0, u.jsxs)(a.x, {
                          fontSize: "40px",
                          color: "#ffd559",
                          children: [" ", "GI\u1edc V\xc0NG DEAL S\u1ed0C"],
                        }),
                        (0, u.jsxs)(a.x, {
                          fontFamily: "-moz-initial",
                          fontSize: "2xl",
                          color: "#fff",
                          mt: "3",
                          children: [
                            (0, u.jsxs)(a.x, {
                              children: [
                                " ",
                                (0, u.jsx)("i", {
                                  children: "K\u1ebft th\xfac trong",
                                }),
                                " ",
                                (0, u.jsx)("span", {
                                  style: {
                                    backgroundColor: "#ffe252",
                                    borderRadius: "9px",
                                    padding: "5px",
                                    marginRight: "5px",
                                    color: "black",
                                  },
                                  children: h.gio.toString().padStart(2, "0"),
                                }),
                                ":",
                                (0, u.jsx)("span", {
                                  style: {
                                    backgroundColor: "#ffe252",
                                    borderRadius: "9px",
                                    padding: "5px",
                                    marginRight: "5px",
                                    color: "black",
                                  },
                                  children: h.phut.toString().padStart(2, "0"),
                                }),
                                ":",
                                (0, u.jsxs)("span", {
                                  style: {
                                    backgroundColor: "#ffe252",
                                    borderRadius: "9px",
                                    padding: "5px",
                                    marginRight: "5px",
                                    color: "black",
                                  },
                                  children: [
                                    h.giay.toString().padStart(2, "0"),
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                            " ",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, u.jsx)(o.xu, {
              mt: "1",
              bachgroundColor: "white",
              children: (0, u.jsx)(d.tq, {
                slidesPerView: 3,
                grid: { rows: 2, fill: "row" },
                spaceBetween: 30,
                autoplay: { delay: 1e5, disableOnInteraction: !1 },
                modules: [l.rj, l.tl, l.pt],
                className: "mySwiper",
                breakpoints: {
                  0: { slidesPerView: 1, spaceBetween: 5 },
                  768: { slidesPerView: 2, spaceBetween: 5 },
                  1024: { slidesPerView: 3, spaceBetween: 5 },
                  1280: { slidesPerView: 4, spaceBetween: 5 },
                  1366: { slidesPerView: 5, spaceBetween: 1 },
                },
                children: y.map((e) =>
                  (0, u.jsx)(
                    o.xu,
                    {
                      children: (0, u.jsx)(d.o5, {
                        children: (0, u.jsx)(p.rU, {
                          to: "/".concat(e.prodType, "/").concat(e.prodID),
                          children: (0, u.jsx)(
                            o.xu,
                            {
                              className: "list",
                              p: "2",
                              mt: "4",
                              m: "2",
                              backgroundColor: "white",
                              borderRadius: "15px ",
                              w: "",
                              h: "auto",
                              boxShadow:
                                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                              children: (0, u.jsxs)(o.xu, {
                                className: "img",
                                children: [
                                  (0, u.jsx)(o.bK, {
                                    m: "auto",
                                    w: 200,
                                    h: 200,
                                    transition: "transform 0.3s ease-in-out",
                                    _hover: { transform: "scale(1.1)" },
                                    children: (0, u.jsx)(n.E, {
                                      src: "".concat(e.prodImg),
                                      maxW: 200,
                                      maxH: 150,
                                      objectFit: "cover",
                                    }),
                                  }),
                                  (0, u.jsx)(a.x, {
                                    mt: "2",
                                    height: "70px",
                                    fontFamily: "Arial",
                                    color: "#424245",
                                    noOfLines: 2,
                                    textAlign: "center",
                                    fontSize: "17px",
                                    _hover: { color: "blue" },
                                    fontWeight: "700",
                                    children: e.prodName,
                                  }),
                                  (0, u.jsxs)(o.xu, {
                                    mt: "2.5",
                                    m: "10px 10px 10px 10px",
                                    children: [
                                      (0, u.jsxs)(c.k, {
                                        children: [
                                          (0, u.jsx)(o.bK, {
                                            children: (0, u.jsxs)(a.x, {
                                              color: "gray.600",
                                              fontSize: "15px",
                                              m: "auto",
                                              children: [
                                                "Gi\xe1 m\u1edbi:",
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, u.jsx)(o.bK, {
                                            children: (0, u.jsx)(a.x, {
                                              textAlign: "center",
                                              fontWeight: "650",
                                              fontSize: "18px",
                                              m: "auto",
                                              ml: "1",
                                              color: "red",
                                              _hover: { color: "red" },
                                              children:
                                                e.prodPrice &&
                                                e.prodPrice.toLocaleString(
                                                  "vi-VN",
                                                  {
                                                    style: "currency",
                                                    currency: "VND",
                                                  },
                                                ),
                                            }),
                                          }),
                                        ],
                                      }),
                                      0 !== e.prodSale &&
                                        (0, u.jsxs)(u.Fragment, {
                                          children: [
                                            (0, u.jsxs)(c.k, {
                                              children: [
                                                (0, u.jsxs)(a.x, {
                                                  color: "gray.600",
                                                  fontSize: "14px",
                                                  mb: "2%",
                                                  children: [
                                                    "Gi\xe1 g\u1ed1c:",
                                                    " ",
                                                  ],
                                                }),
                                                "  ",
                                                (0, u.jsx)(a.x, {
                                                  as: "s",
                                                  color: "gray.600",
                                                  fontSize: "14px",
                                                  ml: "2",
                                                  children:
                                                    e.prodPriceSale &&
                                                    e.prodPriceSale.toLocaleString(
                                                      "vi-VN",
                                                      {
                                                        style: "currency",
                                                        currency: "VND",
                                                      },
                                                    ),
                                                }),
                                              ],
                                            }),
                                            e.prodSale >= 20
                                              ? (0, u.jsx)(o.xu, {
                                                  borderRadius: "5px",
                                                  w: "70%",
                                                  backgroundImage:
                                                    "linear-gradient(135deg, rgb(255, 87, 87) 0%, rgb(255, 0, 0) 100%)",
                                                  color: "#fff ",
                                                  _hover: { color: "black" },
                                                  mt: "",
                                                  textAlign: "center",
                                                  children: (0, u.jsxs)(a.x, {
                                                    fontSize: "13px",
                                                    fontWeight: "500",
                                                    children: [
                                                      "GI\u1ea2M GI\xc1 S\u1ed0C -",
                                                      e.prodSale,
                                                      "%",
                                                    ],
                                                  }),
                                                })
                                              : (0, u.jsxs)(c.k, {
                                                  children: [
                                                    (0, u.jsxs)(a.x, {
                                                      color: "gray.600",
                                                      fontSize: "14px",
                                                      children: [
                                                        "Gi\u1ea3m gi\xe1:",
                                                        " ",
                                                      ],
                                                    }),
                                                    "  ",
                                                    (0, u.jsxs)(a.x, {
                                                      bgColor: "#fff0e9",
                                                      color: "#eb5757",
                                                      fontSize: "14px",
                                                      fontWeight: "700",
                                                      borderRadius: "5px",
                                                      ml: "1",
                                                      children: [
                                                        "-",
                                                        e.prodSale,
                                                        "%",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                          ],
                                        }),
                                      (0, u.jsxs)(o.xu, {
                                        display: "flex",
                                        backgroundColor: "yellow",
                                        borderRadius: "15px",
                                        children: [
                                          (0, u.jsx)(o.xu, {
                                            ml: "3%",
                                            children: (0, u.jsx)("img", {
                                              width: "22px",
                                              height: "auto",
                                              src: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/fs-iconfire.png",
                                            }),
                                          }),
                                          (0, u.jsx)(o.xu, {
                                            m: "1% 3%",
                                            children: (0, u.jsx)(a.x, {
                                              m: "auto",
                                              children: (0, u.jsxs)("b", {
                                                children: [
                                                  "C\xf2n ",
                                                  e.QTY,
                                                  "/100 su\u1ea5t",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e.prodID,
                          ),
                        }),
                      }),
                    },
                    g()(),
                  ),
                ),
              }),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=120.4a9c92da.chunk.js.map
