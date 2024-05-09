const express = require("express");
const router = express.Router();
const blogs = [
  {
    id: 1,
    title: "เศรษฐา ทวีสิน",
    description: "นายกรัฐมนตรีไทย",
    cover:
      "https://media.cnn.com/api/v1/images/stellar/prod/230822132642-srettha-thavisin.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
  },
  {
    id: 2,
    title: "รังสิมันต์ โรม",
    description: "กมธ. ความมั่นคงแห่งราชอาณาจักร",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Rangsiman_Rome_in_October_2023.png",
  },
  {
    id: 3,
    title: "ทักษิณ ชินวัตร",
    description: "อดีตนายกรัฐมนตรีไทย",
    cover:
      "https://www.thebangkokinsight.com/wp-content/uploads/2024/02/%E0%B8%97%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B4%E0%B8%93-%E0%B8%AE%E0%B8%B8%E0%B8%99%E0%B9%80%E0%B8%8B%E0%B8%99-2126702.jpg",
  },
  {
    id: 4,
    title: "พิธา ลิ้มเจริญรัตน์",
    description: "นักธุรกิจและนักการเมืองชาวไทย",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Pita_Limjaroenrat%2C_October_2023.jpg",
  },
  {
    id: 5,
    title: "แพทองธาร ชินวัตร",
    description: "นักธุรกิจและนักการเมืองชาวไทย",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Paetongtarn_Shinawatra%2C_Feb_13%2C_2024_01_%28cropped%29.jpg/220px-Paetongtarn_Shinawatra%2C_Feb_13%2C_2024_01_%28cropped%29.jpg",
  },
  {
    id: 6,
    title: "ธรรมนัส พรหมเผ่า",
    description: "นักการเมืองชาวไทย",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%99%E0%B8%B1%E0%B8%AA_%E0%B8%9E%E0%B8%A3%E0%B8%AB%E0%B8%A1%E0%B9%80%E0%B8%9C%E0%B9%88%E0%B8%B2_2020.jpg/220px-%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%99%E0%B8%B1%E0%B8%AA_%E0%B8%9E%E0%B8%A3%E0%B8%AB%E0%B8%A1%E0%B9%80%E0%B8%9C%E0%B9%88%E0%B8%B2_2020.jpg",
  },
  {
    id: 7,
    title: "ศิริกัญญา ตันสกุล",
    description: "นักการเมืองชาวไทย",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sirikanya_Tansakun-2023-12-10.jpg/440px-Sirikanya_Tansakun-2023-12-10.jpg",
  },
];

/**
 * @swagger
 * /blog:
 *   get:
 *     tags: [Blog]
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/blog", (req, res) => {
  res.json(blogs);
});

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     tags: [Blog]
 *     summary: Get a blog by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the blog to retrieve.
 *     responses:
 *       200:
 *         description: A single blog object.
 *       404:
 *         description: blog not found.
 */
router.get("/blog/:id", (req, res) => {
  const { id } = req.params;
  const result = blogs.find((rs) => rs.id === parseInt(id));
  console.log(id);
  res.json(result);
});

module.exports = router;
