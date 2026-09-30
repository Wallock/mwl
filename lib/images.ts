export const IMG = {
  logo:       "/images/logo/logo.webp",
  lineQr:     "/images/logo/line-qr.webp",

  hero:       "/images/hero/hero.webp",
  btnCall:    "/images/hero/btn-call.webp",
  btnUrgent:  "/images/hero/btn-urgent.webp",
  btnLine:    "/images/hero/btn-line.webp",

  license:    "/images/trust/license.webp",

  maid:       "/images/services/maid.webp",
  nanny:      "/images/services/nanny.webp",
  elder:      "/images/services/elder.webp",
  labor:      "/images/services/labor.webp",

  pkg1:       "/images/packages/pkg1.webp",
  pkg2:       "/images/packages/pkg2.webp",
  pkg3:       "/images/packages/pkg3.webp",
  pkg4:       "/images/packages/pkg4.webp",

  dsc06983:   "/images/dsc/dsc06983.webp",
  dsc06792:   "/images/dsc/dsc06792.webp",
  dsc06833:   "/images/dsc/dsc06833.webp",
  dsc06815:   "/images/dsc/dsc06815.webp",
  dsc06213:   "/images/dsc/dsc06213.webp",

  gallery:    Array.from({ length: 9 }, (_, i) => `/images/gallery/${i + 1}.webp`),

  aia:        "/images/clients/aia.webp",
  asset:      "/images/clients/asset.webp",
  toyota:     "/images/clients/toyota.webp",
  maxco:      "/images/clients/maxco.webp",
  partner1:   "/images/clients/partner1.webp",
  partner2:   "/images/clients/partner2.webp",
  partner3:   "/images/clients/partner3.webp",

  review: Array.from({ length: 6 }, (_, i) => `/images/reviews/review${i + 1}.webp`),

  art: {
    img1: "/images/articles/art1.webp",
    img2: "/images/articles/art2.webp",
    img3: "/images/articles/art3.webp",
    img4: "/images/articles/art4.webp",
    img5: "/images/articles/art5.webp",
    img6: "/images/articles/art6.webp",
    img7: "/images/articles/art7.webp",
    img8: "/images/articles/art8.webp",
  },
} as const;
