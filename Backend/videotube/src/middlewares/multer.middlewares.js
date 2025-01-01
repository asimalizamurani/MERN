import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    // Todo: for me
    // const uniqueSuffix = Date.now() + '_' + Math.round
    // (Math.random() * 1E9)
    cb(null, file.originalname)
  }
})

export const upload = multer({
  storage
})