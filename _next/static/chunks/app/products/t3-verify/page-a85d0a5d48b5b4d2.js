try {
  let e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = "be608a8c-6019-4bbf-be5c-1819f4724b1a"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-be608a8c-6019-4bbf-be5c-1819f4724b1a"));
} catch (e) {}
{
  let e =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : {};
  (e._sentryModuleMetadata = e._sentryModuleMetadata || {}),
    (e._sentryModuleMetadata[new e.Error().stack] = Object.assign(
      {},
      e._sentryModuleMetadata[new e.Error().stack],
      { "_sentryBundlerPluginAppKey:t3-website": !0 }
    ));
}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2277],
  {
    20743: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Features: () => d });
      var i = s(9598),
        a = s(97255),
        l = s(56550),
        r = s(77632),
        n = s(45602);
      function d() {
        return (0, i.jsx)("section", {
          className: "overflow-x-hidden bg-gray-100 lg:px-20 md:pb-24 lg:pb-0",
          id: "features",
          "data-section": "features",
          children: (0, i.jsxs)("div", {
            className: "container-max flex flex-col",
            children: [
              (0, i.jsxs)("div", {
                className: "py-16 px-4 md:py-24 md:px-15 lg:py-24 lg:px-0",
                children: [
                  (0, i.jsx)("h2", {
                    className:
                      "mb-6 lg:mb-12 text-display-xs xl:text-display-md text-gray-900 font-black",
                    children: "T3 Verify Features",
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col xl:flex-row gap-6",
                    children: [
                      (0, i.jsxs)("a", {
                        className:
                          "pl-2 pr-4 lg:p-6 py-4 bg-success-900 rounded-3xl flex lg:flex-col gap-2 text-left lg:basis-1/3 h-[154px] lg:h-[320px]",
                        href: "#regulated",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "p-[7px] w-[40px] lg:w-[56px] lg:p-[14px] text-base-white",
                            children: (0, i.jsx)(n.LV, {
                              className: "size-[26px] lg:size-[36px]",
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex flex-col gap-2 flex-1",
                            children: [
                              (0, i.jsx)("h4", {
                                className:
                                  "text-text-md lg:text-text-xl font-black text-base-white lg:mt-2 lg:mb-2",
                                children: "Regulated Yet Permissionless",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-text-xs lg:text-text-md text-base-white flex-1 lg:mb-0",
                                children:
                                  "Comply with global regulations and data standards while ensuring user privacy and sovereignty of digital identities via a decentralized network for data storage and verification.",
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "flex text-text-sm lg:text-text-md font-bold text-base-white gap-2",
                                children: [
                                  "Learn more ",
                                  (0, i.jsx)(l.A, {
                                    className: "size-5 lg:size-6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("a", {
                        className:
                          "pl-2 pr-4 lg:p-6 py-4 bg-t3-verify-mid-color rounded-3xl flex lg:flex-col gap-2 text-left lg:basis-1/3 h-[154px] lg:h-[320px]",
                        href: "#trusted",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "p-[7px] w-[40px] lg:w-[56px] lg:p-[14px] text-base-white",
                            children: (0, i.jsx)(n.cW, {
                              className: "size-[26px] lg:size-[36px]",
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex flex-col gap-2 flex-1",
                            children: [
                              (0, i.jsx)("h4", {
                                className:
                                  "text-text-md lg:text-text-xl font-black text-base-white lg:mt-2 lg:mb-2",
                                children: "Trusted By Users & Institutions",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-text-xs lg:text-text-md text-base-white flex-1 lg:mb-0",
                                children:
                                  "Verifiable Private Identities, secured by zero-knowledge cryptography, enables a network of trust between users and institutions where privacy and verifiability can co-exist.",
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "flex text-text-sm lg:text-text-md font-bold text-base-white gap-2",
                                children: [
                                  "Learn more ",
                                  (0, i.jsx)(l.A, {
                                    className: "size-5 lg:size-6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("a", {
                        className:
                          "pl-2 pr-4 lg:p-6 py-4 bg-primary-600 rounded-3xl flex lg:flex-col gap-2 text-left lg:basis-1/3 h-[154px] lg:h-[320px]",
                        href: "#enterprise-grade",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "p-[7px] w-[40px] lg:w-[56px] lg:p-[14px] text-base-white",
                            children: (0, i.jsx)(n.G8, {
                              className: "size-[26px] lg:size-[36px]",
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex flex-col gap-2 flex-1",
                            children: [
                              (0, i.jsx)("h4", {
                                className:
                                  "text-text-md lg:text-text-xl font-black text-base-white lg:mt-2 lg:mb-2",
                                children: "Enterprise-grade & Customizable",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-text-xs lg:text-text-md text-base-white flex-1 lg:mb-0",
                                children:
                                  "Native KYC/AML that meets institutional and regulatory compliance, with fully customizable modules and lightning fast integrations to fit unique business needs.",
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "flex text-text-sm lg:text-text-md font-bold text-base-white gap-2",
                                children: [
                                  "Learn more ",
                                  (0, i.jsx)(l.A, {
                                    className: "size-5 lg:size-6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-16 md:gap-24 lg:gap-24 lg:py-24",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "py-16 px-4 md:py-0 md:px-15 lg:px-0 lg:py-12 flex flex-col lg:flex-row lg:gap-18 xl:gap-24 lg:items-center gap-6",
                    id: "regulated",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "lg:basis-1/2",
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)("div", {
                                className: "flex gap-4 items-center xl:gap-2",
                                children: [
                                  (0, i.jsx)("span", {
                                    className:
                                      "rounded-full bg-success-900 flex items-center w-fit p-[10px] text-gray-25",
                                    children: (0, i.jsx)(n.LV, {}),
                                  }),
                                  (0, i.jsx)("h4", {
                                    className:
                                      "text-text-md font-bold text-success-900",
                                    children: "Regulated Yet Permissionless",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "xl:hidden my-4 md:my-6",
                                children: (0, i.jsx)(a.default, {
                                  src: "/images/products/t3-verify/feature-1.png",
                                  alt: "stamp with t3 icon on a cube marking if KYC has passed",
                                  width: 640,
                                  height: 640,
                                  className: "w-full h-auto rounded-3xl",
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: "my-6 lg:my-8 flex flex-col gap-4",
                                children: [
                                  (0, i.jsx)("h2", {
                                    className:
                                      "text-display-xs md:text-display-sm font-black text-gray-900",
                                    children:
                                      "A KYC Solution Without Compromise",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-text-md md:text-text-lg text-gray-600",
                                    children:
                                      "Enterprises and Web3 users no longer need to choose between regulatory compliance and public anonymity. T3 Verify stores user identity and KYC data across decentralized networks and in regulatory vaults, both protected by smart contracts and blockchain security, while verification is achieved anonymously via zero-knowledge cryptography.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "py-6",
                            children: (0, i.jsxs)(n.nD, {
                              defaultIndex: 0,
                              children: [
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children: "KYC/AML Compliant",
                                      }),
                                    }),
                                    (0, i.jsx)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, i.jsx)("p", {
                                        className: "text-text-sm text-gray-600",
                                        children:
                                          "Institutional-grade KYC/AML ensures regulatory compliance with global CDD laws and FATF’s Crypto Travel Rule. T3 Verify’s modular and customizable platform allows enterprises to adopt native Web3 KYC or utilize existing KYC to issue Verifiable Credentials.",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children: "Privacy-preserving",
                                      }),
                                    }),
                                    (0, i.jsx)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, i.jsx)("p", {
                                        className: "text-text-sm text-gray-600",
                                        children:
                                          "User identity data is stored in decentralized servers and in regulatory vaults, both protected by layers of encryption and blockchain security. All use-access to data is via zero-knowledge cryptography, and anonymous Verifiable Credentials enable the cross-platform acceptance of identity claims without compromising on user privacy.",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "lg:basis-1/2 hidden xl:block",
                        children: (0, i.jsx)(a.default, {
                          src: "/images/products/t3-verify/feature-1.png",
                          alt: "stamp with t3 icon on a cube marking if KYC has passed",
                          width: 640,
                          height: 640,
                          className: "w-full h-auto rounded-3xl",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "py-16 px-4 md:py-0 md:px-15 lg:px-0 lg:py-12 flex flex-col lg:flex-row lg:gap-18 xl:gap-24 lg:items-center gap-6",
                    id: "trusted",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "lg:basis-1/2 order-2 lg:order-1 hidden xl:block",
                        children: (0, i.jsx)(a.default, {
                          src: "/images/products/t3-verify/feature-2.png",
                          alt: "three VC card pointing to a user profile data",
                          width: 640,
                          height: 640,
                          className: "w-full h-auto rounded-3xl",
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "lg:basis-1/2 order-1 lg:order-2",
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)("div", {
                                className: "flex gap-4 items-center xl:gap-2",
                                children: [
                                  (0, i.jsx)("span", {
                                    className:
                                      "rounded-full bg-t3-verify-mid-color flex items-center w-fit p-[10px] text-gray-25",
                                    children: (0, i.jsx)(n.cW, {}),
                                  }),
                                  (0, i.jsx)("h4", {
                                    className:
                                      "text-text-md font-bold text-t3-verify-mid-color",
                                    children: "Trusted By Users & Institutions",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "xl:hidden my-4 md:my-6",
                                children: (0, i.jsx)(a.default, {
                                  src: "/images/products/t3-verify/feature-2.png",
                                  alt: "three VC card pointing to a user profile data",
                                  width: 640,
                                  height: 640,
                                  className: "w-full h-auto rounded-3xl",
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: "my-6 lg:my-8 flex flex-col gap-4",
                                children: [
                                  (0, i.jsx)("h2", {
                                    className:
                                      "text-display-xs md:text-display-sm font-black text-gray-900",
                                    children:
                                      "Issue Trusted and Reusable Credentials for Verifiable Anonymity",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-text-md md:text-text-lg text-gray-600",
                                    children:
                                      "Create seamless user experiences across complex ecosystems without compromising privacy. Leverage Smart Verifiable Credentials to program user access and empower data interoperability, all protected by zero-knowledge cryptography and decentralized network security.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "py-6",
                            children: (0, i.jsxs)(n.nD, {
                              defaultIndex: 0,
                              children: [
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children:
                                          "Smart Verifiable Credentials",
                                      }),
                                    }),
                                    (0, i.jsx)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, i.jsx)("p", {
                                        className: "text-text-sm text-gray-600",
                                        children:
                                          "Digital identity claims issued by trusted organizations reduce cross-platform friction and compliance costs. T3 Verify’s Smart Credentials never degrade as they remain connected to Terminal 3’s live data Oracle, and allow verifiers to further query information about anonymous users.",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children: "Zero-knowledge Cryptography",
                                      }),
                                    }),
                                    (0, i.jsx)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, i.jsx)("p", {
                                        className: "text-text-sm text-gray-600",
                                        children:
                                          "Every identity claim is guaranteed by a unique zero-knowledge proof, which any third-party can verify to ensure that claims are accurate and that underlying data remains tamper-free.",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "py-16 px-4 md:py-0 md:px-15 lg:px-0 lg:py-12 flex flex-col lg:flex-row lg:gap-18 xl:gap-24 lg:items-center gap-6",
                    id: "enterprise-grade",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "lg:basis-1/2",
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)("div", {
                                className: "flex gap-4 items-center xl:gap-2",
                                children: [
                                  (0, i.jsx)("span", {
                                    className:
                                      "rounded-full bg-primary-600 flex items-center w-fit p-[10px] text-gray-25",
                                    children: (0, i.jsx)(n.G8, {}),
                                  }),
                                  (0, i.jsx)("h4", {
                                    className:
                                      "text-text-md font-bold text-primary-600",
                                    children: "Enterprise-grade & Customisable",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "xl:hidden my-4 md:my-6",
                                children: (0, i.jsx)(a.default, {
                                  src: "/images/products/t3-verify/feature-3.png",
                                  alt: "three mobile devices with different stages of KYC verification process",
                                  width: 640,
                                  height: 640,
                                  className: "w-full h-auto rounded-3xl",
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: "my-6 lg:my-8 flex flex-col gap-4",
                                children: [
                                  (0, i.jsx)("h2", {
                                    className:
                                      "text-display-xs md:text-display-sm font-black text-gray-900",
                                    children:
                                      "Scaleable and Customisable Identity Verification",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-text-md md:text-text-lg text-gray-600",
                                    children:
                                      "T3 Verify’s modular and customizable KYC enables purpose-built verification for any business need. Adopt native Web3 KYC or utilize existing KYC processes to issue Verifiable Credentials.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "py-6",
                            children: (0, i.jsxs)(n.nD, {
                              defaultIndex: 0,
                              children: [
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children: "Document verification",
                                      }),
                                    }),
                                    (0, i.jsx)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, i.jsx)("p", {
                                        className: "text-text-sm text-gray-600",
                                        children:
                                          "Verify over 10,000+ document types across global jurisdictions. Multiple alteration filters and cross-checks against authenticated registries help to identify fake or stolen IDs.",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children: "Liveness checks",
                                      }),
                                    }),
                                    (0, i.jsxs)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: [
                                        (0, i.jsx)("p", {
                                          className:
                                            "text-text-sm text-gray-600",
                                          children:
                                            "AI is used to verify liveness and compare face-captures to submitted IDs, automatically flagging unconscious verification, deep-fakes, masks, and identical twins.",
                                        }),
                                        (0, i.jsxs)(n.$n, {
                                          variant: "link",
                                          href: "/contact-us",
                                          size: "sm",
                                          children: [
                                            "Learn about verification ",
                                            (0, i.jsx)(r.A, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children: "AML & sanction checks",
                                      }),
                                    }),
                                    (0, i.jsxs)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: [
                                        (0, i.jsx)("p", {
                                          className:
                                            "text-text-sm text-gray-600",
                                          children:
                                            "Submitted information is cross-referenced with sanction registries, adverse media lists, and politically exposed persons screening lists to determine a final risk score.",
                                        }),
                                        (0, i.jsxs)(n.$n, {
                                          variant: "link",
                                          href: "/contact-us",
                                          size: "sm",
                                          children: [
                                            "Learn about verification ",
                                            (0, i.jsx)(r.A, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children: "On-chain AML",
                                      }),
                                    }),
                                    (0, i.jsxs)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: [
                                        (0, i.jsx)("p", {
                                          className:
                                            "text-text-sm text-gray-600",
                                          children:
                                            "Detect high-risk transactions and prevent wallet addresses tied to illicit activity from engaging with your platforms via proactive address screening.",
                                        }),
                                        (0, i.jsxs)(n.$n, {
                                          variant: "link",
                                          href: "/contact-us",
                                          size: "sm",
                                          children: [
                                            "Learn about verification ",
                                            (0, i.jsx)(r.A, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)(n.As, {
                                  children: [
                                    (0, i.jsx)(n.u, {
                                      children: (0, i.jsx)("h4", {
                                        className:
                                          "text-text-lg font-bold text-gray-900",
                                        children: "Ongoing monitoring",
                                      }),
                                    }),
                                    (0, i.jsxs)(n.ub, {
                                      className: "flex flex-col gap-4",
                                      children: [
                                        (0, i.jsx)("p", {
                                          className:
                                            "text-text-sm text-gray-600",
                                          children:
                                            "Re-verify users at custom checkpoints or per regulatory schedule to ensure ongoing compliance and business protections.",
                                        }),
                                        (0, i.jsxs)(n.$n, {
                                          variant: "link",
                                          href: "/contact-us",
                                          size: "sm",
                                          children: [
                                            "Learn about verification ",
                                            (0, i.jsx)(r.A, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "lg:basis-1/2 order-2 lg:order-1 hidden xl:block",
                        children: (0, i.jsx)(a.default, {
                          src: "/images/products/t3-verify/feature-3.png",
                          alt: "three mobile devices with different stages of KYC verification process",
                          width: 640,
                          height: 640,
                          className: "w-full h-auto rounded-3xl",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    35982: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { VerifiableCredential: () => l });
      var i = s(9598),
        a = s(97255);
      function l() {
        return (0, i.jsx)("section", {
          className: "bg-gray-25 py-16 pb-24 md:py-0 md:pb-0 lg:py-24 lg:px-20",
          id: "verifiable-credential",
          "data-section": "verifiable-credential",
          children: (0, i.jsxs)("div", {
            className:
              "container-max gap-12 md:gap-0 lg:gap-16 flex flex-col lg:flex-row lg:items-center",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col basis-1/2 gap-3 px-4 md:px-15 md:py-24 lg:px-0 lg:py-0",
                children: [
                  (0, i.jsx)("h3", {
                    className:
                      "text-text-sm md:text-text-md font-bold text-primary-700",
                    children: "Verifiable Credentials",
                  }),
                  (0, i.jsx)("h2", {
                    className:
                      "text-display-xs md:text-display-sm xl:text-display-md font-black text-gray-900 max-w-[600px]",
                    children:
                      "Secure, Tamper-proof, and Trusted Identity Claims",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "lg:mt-5 text-gray-600 text-text-sm md:text-text-md xl:text-text-xl",
                    children: [
                      (0, i.jsxs)("p", {
                        children: [
                          "Using T3 Verify, businesses can issue Smart Verifiable Credentials; digital identity claims made tamper-proof and anonymous with zero-knowledge cryptography.",
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("br", {}),
                        ],
                      }),
                      (0, i.jsx)("p", {
                        children:
                          "Our Smart Verifiable Credentials are connected to live user data via Terminal 3’s Oracle, ensuring that claims remain up-to-date and allowing verifiers to make additional queries about an anonymous user. Zero-knowledge proofs guarantee the accuracy of claims and query returns for institutional trust.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "basis-1/2 flex justify-center relative min-h-[100vw] lg:min-h-0",
                children: [
                  (0, i.jsx)(a.default, {
                    className: "hidden lg:block",
                    loading: "lazy",
                    width: 576,
                    height: 560,
                    src: "/images/products/t3-verify/vc.png",
                    alt: "terminal3 permissioned defi use case",
                  }),
                  (0, i.jsx)(a.default, {
                    className: "hidden md:block lg:hidden",
                    loading: "lazy",
                    width: 768,
                    height: 624,
                    src: "/images/products/t3-verify/vc-tablet.png",
                    alt: "terminal3 permissioned defi use case",
                  }),
                  (0, i.jsx)("div", {
                    className: "md:hidden absolute h-full",
                    children: (0, i.jsx)(a.default, {
                      className: "h-auto",
                      loading: "lazy",
                      width: 750,
                      height: 750,
                      src: "/images/products/t3-verify/vc-mobile.png",
                      alt: "terminal3 permissioned defi use case",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    65546: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { UseCases: () => m });
      var i = s(9598),
        a = s(11950),
        l = s(28884),
        r = s(97255),
        n = s(1231),
        d = s(35028),
        o = s(11676),
        c = s(45602);
      let x = [
        {
          id: "sar",
          title: "Stablecoins and RWA",
          href: "/solutions/rwa-and-stablecoins",
          content:
            "Power a regulated digital asset ecosystem where issuers, distributors, regulators, and users trust an interoperable KYC credential that satisfies global compliance.",
          icon: (0, i.jsx)(r.default, {
            fill: !0,
            alt: "education",
            src: "/images/products/t3-verify/sar.svg",
          }),
          image: "/images/solutions/rwa/hero.png",
          alt: "different coin symbols with a globe and a screen showing a login screen",
        },
        {
          id: "pd",
          title: "Permissioned DeFi",
          href: "/solutions/defi",
          content:
            "Tap into enterprise-backed liquidity pools and enable institutional access with Web3 native KYC, all without compromising on the fundamental values of DeFi.",
          icon: (0, i.jsx)(r.default, {
            fill: !0,
            alt: "education",
            src: "/images/products/t3-verify/pd.svg",
          }),
          image: "/images/solutions/defi/hero.png",
          alt: "a wallet with a key showing different crypto coin symbol with a mobile phone showing a KYC process",
        },
        {
          id: "gaming",
          title: "Gaming",
          href: "/solutions/gaming",
          content:
            "Ensure authentic and secure identities that defend against ecosystem intrusion of bots and AI, and protect against multi-accounting and other abuses by connecting each player to a unique Verifiable Private Identity.",
          icon: (0, i.jsx)(r.default, {
            fill: !0,
            alt: "education",
            src: "/images/products/t3-verify/gaming.svg",
          }),
          image: "/images/solutions/gaming/hero.png",
          alt: "different icons of different platforms like gaming, social media and crypto coin surrounding a T3 VC card with a galaxy background",
        },
      ];
      function m() {
        let [e, t] = (0, a.useState)("sar");
        return (0, i.jsx)("section", {
          className: (0, n.A)(
            "px-4 py-12 md:px-15 mdd:py-24 lg:px-20 w-full transition-colors duration-200 overflow-hidden",
            {
              "bg-primary-100": "sar" === e,
              "bg-base-white": "pd" === e,
              "bg-black": "gaming" === e,
            }
          ),
          id: "use-cases",
          "data-section": "use-cases",
          children: (0, i.jsx)("div", {
            className: "container-max relative",
            children: (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("h2", {
                  className: (0, n.A)(
                    "text-display-xs lg:text-display-md font-black pt-3 pb-5",
                    {
                      "text-gray-900": "gaming" !== e,
                      "text-base-white": "gaming" === e,
                    }
                  ),
                  children: "Use Cases",
                }),
                (0, i.jsxs)(l.tU, {
                  selectedKey: e,
                  onSelectionChange: t,
                  children: [
                    (0, i.jsx)(l.wb, {
                      "aria-label": "Use cases",
                      className: "flex gap-4 w-[353px] lg:w-auto",
                      children: x.map((t) =>
                        (0, i.jsxs)(
                          l.oz,
                          {
                            id: t.id,
                            className: (0, n.A)(
                              "text-text-sm font-bold cursor-pointer px-[4px] pb-[12px] outline-none focus-visible:ring-2 transition-colors relative",
                              {
                                "text-gray-500 selected:text-primary-700":
                                  "gaming" !== e,
                                "text-gray-300 selected:text-primary-400":
                                  "gaming" === e,
                              }
                            ),
                            children: [
                              t.title,
                              e === t.id &&
                                (0, i.jsx)(d.P.div, {
                                  className: (0, n.A)(
                                    "absolute bottom-0 left-0 w-full h-[2px] bg-primary-700",
                                    { "bg-primary-400": "gaming" === e }
                                  ),
                                  layoutId: "underline",
                                }),
                            ],
                          },
                          t.id
                        )
                      ),
                    }),
                    x.map((t) =>
                      (0, i.jsxs)(
                        l.Kp,
                        {
                          id: t.id,
                          className:
                            "lg:flex lg:gap-18 xl:gap-24 lg:h-[512px] lg:mt-6",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "basis-1/2 h-[296px] lg:h-auto pt-6 lg:pt-12",
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex gap-2 items-center mb-4 lg:block lg:mb-0",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "relative size-[30px] lg:size-16",
                                      children: t.icon,
                                    }),
                                    (0, i.jsx)("h3", {
                                      className: (0, n.A)(
                                        "text-text-lg lg:text-display-sm font-black transition-colors duration-200 lg:pt-6 lg:pb-4 text-primary-500",
                                        {
                                          "lg:text-gray-900": "gaming" !== e,
                                          "lg:text-base-white": "gaming" === e,
                                        }
                                      ),
                                      children: t.title,
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("p", {
                                  className: (0, o.QP)(
                                    (0, n.A)(
                                      "text-text-sm lg:text-text-lg text-gray-600 pb-6 lg:pb-8 min-h-[152px]",
                                      {
                                        "text-gray-700": "pd" === e,
                                        "text-gray-100": "gaming" === e,
                                      }
                                    )
                                  ),
                                  children: t.content,
                                }),
                                (0, i.jsx)(c.$n, {
                                  size: "lg",
                                  href: t.href,
                                  variant:
                                    "gaming" === e ? "secondary" : "primary",
                                  children: "Learn more",
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: (0, n.A)(
                                "relative shrink-0 overflow-hidden",
                                {
                                  "lg:w-[600px]": "sar" === e,
                                  "lg:w-[560px]": "pd" === e,
                                  "lg:w-[592px]": "gaming" === e,
                                }
                              ),
                              children: (0, i.jsx)(r.default, {
                                loading: "lazy",
                                width: 0,
                                height: 0,
                                sizes: "100%",
                                src: t.image,
                                alt: t.alt,
                                className: (0, n.A)(
                                  "lg:h-[560px] lg:w-auto w-[375px] h-auto lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",
                                  {
                                    "lg:!size-[672px] lg:max-w-[672px]":
                                      "gaming" === t.id,
                                  }
                                ),
                              }),
                            }),
                          ],
                        },
                        t.id
                      )
                    ),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    69215: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { HowItWorks: () => r });
      var i = s(9598),
        a = s(97255),
        l = s(45602);
      function r() {
        return (0, i.jsx)("section", {
          className: "lg:px-20 lg:py-24",
          id: "how-it-works",
          "data-section": "how-it-works",
          children: (0, i.jsxs)("div", {
            className:
              "container-max bg-gray-900 lg:rounded-3xl overflow-x-hidden px-4 lg:ps-[60px] py-16 lg:py-12 md:px-15 flex flex-col xl:flex-row justify-center lg:justify-around gap-10 lg:gap-12",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col basis-1/2 gap-5 max-w-[400px] lg:py-24",
                children: [
                  (0, i.jsx)("h2", {
                    className:
                      "text-display-sm lg:text-display-lg font-black text-gray-25 flex gap-4",
                    children: "Simple Onboarding",
                  }),
                  (0, i.jsx)("p", {
                    className:
                      "text-primary-200 lg:text-white text-text-sm lg:text-text-xl lg:mb-7",
                    children:
                      "Serve your customers with a simple and streamlined onboarding experience, secured by Terminal 3. Create an account and verify identity via a desktop or mobile device, without requiring Web3 experience or a digital wallet.",
                  }),
                  (0, i.jsx)(l.$n, {
                    className: "mt-5 lg:mt-0 lg:mx-0",
                    href: "/contact-us",
                    children: "Learn more",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className:
                  "min-h-[337px] w-full lg:w-auto lg:min-h-[737px] relative",
                children: (0, i.jsx)("div", {
                  className:
                    "h-[337px] w-full md:h-[598px] lg:w-[750px] lg:h-[737px] flex justify-center items-center relative",
                  children: (0, i.jsx)(a.default, {
                    loading: "lazy",
                    width: 750,
                    height: 737,
                    src: "/images/products/t3-verify/how-it-works.png",
                    alt: "terminal3 permissioned defi use case",
                    className: "h-full w-auto",
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    85238: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Faq: () => l });
      var i = s(9598),
        a = s(45602);
      function l() {
        return (0, i.jsx)("section", {
          className: "px-4 py-16 md:py-24 md:px-15 w-full",
          id: "faq",
          "data-section": "faq",
          children: (0, i.jsxs)("div", {
            className:
              "container-max justify-center items-center flex flex-col",
            children: [
              (0, i.jsx)("h2", {
                className:
                  "text-display-xs lg:text-display-md text-gray-900 font-black",
                children: "Frequently Asked Questions",
              }),
              (0, i.jsxs)("h3", {
                className: "text-text-sm lg:text-text-xl text-gray-600 mt-5",
                children: [
                  "Everything you need to know about ",
                  (0, i.jsx)("strong", { children: "T3 Verify." }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-12 lg:mt-16 w-full lg:w-[768px]",
                children: (0, i.jsxs)(a.nD, {
                  defaultIndex: 0,
                  children: [
                    (0, i.jsxs)(a.As, {
                      children: [
                        (0, i.jsx)(a.u, {
                          children: (0, i.jsx)("h4", {
                            className: "text-left font-bold text-gray-900",
                            children:
                              "Is this fully compliant with AML regulations?",
                          }),
                        }),
                        (0, i.jsx)(a.ub, {
                          children: (0, i.jsx)("p", {
                            className:
                              "text-gray-600 text-text-sm lg:text-text-md",
                            children:
                              "All KYC information collected is put into a Regulatory Vault that can only be accessed by regulators during an enforcement action. Verifiable credentials also travel with a user's decentralised identity, making all transactions compliant with the Crypto Travel Rule without any further effort.",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(a.As, {
                      children: [
                        (0, i.jsx)(a.u, {
                          children: (0, i.jsx)("h4", {
                            className: "text-left font-bold text-gray-900",
                            children:
                              "How is this compliant with the Crypto travel rule?",
                          }),
                        }),
                        (0, i.jsx)(a.ub, {
                          children: (0, i.jsx)("p", {
                            className:
                              "text-gray-600 text-text-sm lg:text-text-md",
                            children:
                              "The Crypto Travel Rule requires virtual asset service providers to share personal information of a transaction's sender and recipient with the other financial institutions involved in the transaction. With T3 Verify, a trusted Verifiable Credential holding all the relevant regulatory information in its metadata travels with the users, ready to be referenced by whatever institution they interact with.",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(a.As, {
                      children: [
                        (0, i.jsx)(a.u, {
                          children: (0, i.jsx)("h4", {
                            className: "text-left font-bold text-gray-900",
                            children:
                              "Which jurisdictions does T3 Verify cover?",
                          }),
                        }),
                        (0, i.jsx)(a.ub, {
                          children: (0, i.jsx)("p", {
                            className:
                              "text-gray-600 text-text-sm lg:text-text-md",
                            children:
                              "T3 Verify accepts documents from 192 countries, however jurisdictional acceptance of verifiable credentials and privacy-preserving KYC may differ between regions. Contact us to learn more about your regulatory needs.",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(a.As, {
                      children: [
                        (0, i.jsx)(a.u, {
                          children: (0, i.jsx)("h4", {
                            className: "text-left font-bold text-gray-900",
                            children:
                              "Does Terminal 3 partner with a third-party to conduct KYC?",
                          }),
                        }),
                        (0, i.jsx)(a.ub, {
                          children: (0, i.jsx)("p", {
                            className:
                              "text-gray-600 text-text-sm lg:text-text-md",
                            children:
                              "Terminal 3 has partnered with Ondato, a pioneering KYC compliance platform, to create a brand new privacy-preserving KYC product that protects users rights to data privacy while also being compliant with world-wide AML requirements.",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(a.As, {
                      children: [
                        (0, i.jsx)(a.u, {
                          children: (0, i.jsx)("h4", {
                            className: "text-left font-bold text-gray-900",
                            children:
                              "Will I receive any information about the users I KYC?",
                          }),
                        }),
                        (0, i.jsx)(a.ub, {
                          children: (0, i.jsx)("p", {
                            className:
                              "text-gray-600 text-text-sm lg:text-text-md",
                            children:
                              "Through the Terminal 3 platform, institutions can segment and target their users through privacy-preserving email, but will never receive any underlying information, like birthdays, ID scans, or email addresses. If needed for compliance, all KYC results and collected data can be confidently handed over to regulators without any personally identifying information ever touching your servers.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    88039: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 85238)),
        Promise.resolve().then(s.bind(s, 20743)),
        Promise.resolve().then(s.bind(s, 98494)),
        Promise.resolve().then(s.bind(s, 69215)),
        Promise.resolve().then(s.bind(s, 88875)),
        Promise.resolve().then(s.bind(s, 65546)),
        Promise.resolve().then(s.bind(s, 35982)),
        Promise.resolve().then(s.bind(s, 87454)),
        Promise.resolve().then(s.bind(s, 46577)),
        Promise.resolve().then(s.bind(s, 2465)),
        Promise.resolve().then(s.bind(s, 57503)),
        Promise.resolve().then(s.bind(s, 39582)),
        Promise.resolve().then(s.bind(s, 5045)),
        Promise.resolve().then(s.bind(s, 13888)),
        Promise.resolve().then(s.bind(s, 89514)),
        Promise.resolve().then(s.bind(s, 2870)),
        Promise.resolve().then(s.bind(s, 43232)),
        Promise.resolve().then(s.bind(s, 24016)),
        Promise.resolve().then(s.bind(s, 54697)),
        Promise.resolve().then(s.bind(s, 55868)),
        Promise.resolve().then(s.bind(s, 21435)),
        Promise.resolve().then(s.bind(s, 57179)),
        Promise.resolve().then(s.bind(s, 68949)),
        Promise.resolve().then(s.bind(s, 79114)),
        Promise.resolve().then(s.bind(s, 79898)),
        Promise.resolve().then(s.bind(s, 9073)),
        Promise.resolve().then(s.bind(s, 41057)),
        Promise.resolve().then(s.bind(s, 54985)),
        Promise.resolve().then(s.bind(s, 29177)),
        Promise.resolve().then(s.bind(s, 41123)),
        Promise.resolve().then(s.bind(s, 67767)),
        Promise.resolve().then(s.bind(s, 30471)),
        Promise.resolve().then(s.bind(s, 60688)),
        Promise.resolve().then(s.bind(s, 70186)),
        Promise.resolve().then(s.bind(s, 50403)),
        Promise.resolve().then(s.bind(s, 1549)),
        Promise.resolve().then(s.bind(s, 63351)),
        Promise.resolve().then(s.bind(s, 59762)),
        Promise.resolve().then(s.bind(s, 11826)),
        Promise.resolve().then(s.bind(s, 78618)),
        Promise.resolve().then(s.bind(s, 25759)),
        Promise.resolve().then(s.bind(s, 53541)),
        Promise.resolve().then(s.bind(s, 60013)),
        Promise.resolve().then(s.bind(s, 97021)),
        Promise.resolve().then(s.bind(s, 42684)),
        Promise.resolve().then(s.bind(s, 98545)),
        Promise.resolve().then(s.bind(s, 68459)),
        Promise.resolve().then(s.bind(s, 75394)),
        Promise.resolve().then(s.bind(s, 48821)),
        Promise.resolve().then(s.bind(s, 83473)),
        Promise.resolve().then(s.bind(s, 52874)),
        Promise.resolve().then(s.bind(s, 84770)),
        Promise.resolve().then(s.bind(s, 53181)),
        Promise.resolve().then(s.bind(s, 54633)),
        Promise.resolve().then(s.bind(s, 80042)),
        Promise.resolve().then(s.bind(s, 32764)),
        Promise.resolve().then(s.bind(s, 76300)),
        Promise.resolve().then(s.bind(s, 53085)),
        Promise.resolve().then(s.bind(s, 64240)),
        Promise.resolve().then(s.bind(s, 24560)),
        Promise.resolve().then(s.bind(s, 35888)),
        Promise.resolve().then(s.bind(s, 47701)),
        Promise.resolve().then(s.bind(s, 44094)),
        Promise.resolve().then(s.bind(s, 45224)),
        Promise.resolve().then(s.bind(s, 47175)),
        Promise.resolve().then(s.bind(s, 78947)),
        Promise.resolve().then(s.bind(s, 26641)),
        Promise.resolve().then(s.bind(s, 46291)),
        Promise.resolve().then(s.bind(s, 3724)),
        Promise.resolve().then(s.bind(s, 41407)),
        Promise.resolve().then(s.bind(s, 15152)),
        Promise.resolve().then(s.bind(s, 2754)),
        Promise.resolve().then(s.bind(s, 58415)),
        Promise.resolve().then(s.bind(s, 35732)),
        Promise.resolve().then(s.t.bind(s, 30027, 23)),
        Promise.resolve().then(s.t.bind(s, 76236, 23));
    },
    88875: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Overview: () => l });
      var i = s(9598),
        a = s(45602);
      function l() {
        return (0, i.jsx)(a.Lu, {
          bg: "/images/products/t3-verify/bg.png",
          fg: "/images/products/t3-verify/sub-hero.png",
          fgHeight: 240,
          header: "Designed for Web3, Built for Verification",
          body: "T3 Verify empowers businesses and protects users with Verifiable Private Identity, reusable digital credentials and identity assets that enable true interoperability and ultimate privacy. Modular KYC/AML and on-chain monitoring provides enterprises with a purpose-built identity solution that meets regulatory compliance, and allows TradFi and DeFi platforms to confidently respond to enforcement investigations or actions.",
        });
      }
    },
    98494: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Hero: () => n });
      var i = s(9598),
        a = s(11950),
        l = s(82380),
        r = s(45602);
      function n() {
        let e = (0, a.useRef)(null),
          [t, s] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
            e.current && e.current.play();
          }, [e.current]),
          (0, i.jsx)("section", {
            className:
              "px-4 pt-12 md:px-15 md:py-16 lg:px-20 lg:py-20 bg-gray-100 overflow-hidden lg:h-[800px]",
            id: "home",
            children: (0, i.jsxs)("div", {
              className:
                "container-max flex-col lg:flex-row flex items-center lg:h-full",
              children: [
                (0, i.jsxs)("div", {
                  className: "flex flex-col basis-1/2 lg:max-w-[624px]",
                  children: [
                    (0, i.jsxs)("h4", {
                      className:
                        "flex items-center text-text-xl font-black text-gray-500 gap-2 mb-2",
                      children: [(0, i.jsx)(r._l, {}), " T3 Verify"],
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, i.jsxs)("h1", {
                          className:
                            "xl:text-display-lg font-black text-gray-900 text-display-md",
                          children: [
                            "Verifiable Credentials",
                            (0, i.jsx)("div", { children: "& KYC for the" }),
                            (0, i.jsx)("span", {
                              className: "text-primary-700",
                              children: "New Internet",
                            }),
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "xl:text-text-lg text-gray-600 text-text-md lg:max-w-[480px]",
                          children:
                            "Secure the future of your business and guarantee user privacy with KYC designed for Web3. Issue Verifiable Private Identities and Smart Credentials that are reusable, interoperable, and always up-to-date. Comply with global financial regulations in the decentralized world, and confidently grow your digital assets business with an identity solution trusted by governments and global enterprises.",
                        }),
                        (0, i.jsx)(r.$n, {
                          size: "xl",
                          href: "/contact-us",
                          className: "z-10",
                          children: "Get a demo",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "lg:basis-1/2 relative h-[360px] lg:min-h-[624px] w-full",
                  children: (0, i.jsxs)("div", {
                    className:
                      "absolute h-full w-[515px] md:w-[679px] lg:w-[936px] lg:h-[624px] -left-[45px] lg:left-[-75px] md:top-[-45px] lg:top-[-75px]",
                    children: [
                      t && (0, i.jsx)(r.fK, {}),
                      (0, i.jsx)(l.ai, {
                        src: "/files/t3verify-animation.json",
                        loop: !1,
                        autoplay: !1,
                        ref: e,
                        keepLastFrame: !0,
                        onEvent: function (e) {
                          e === l.gd.Load && s(!1),
                            e === l.gd.Error &&
                              console.error("Error loading the animation");
                        },
                        className:
                          "w-[515px] md:w-[679px] lg:w-[936px] lg:h-[624px] h-[360px]",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [7255, 8311, 507, 314, 5602, 5148, 1860, 2086, 7358], () =>
      t(88039)
    ),
      (_N_E = e.O());
  },
]);
