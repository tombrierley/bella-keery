import dayjs from "dayjs";

const formatDate = (date, item, dateFormat = "DD/MM/YYYY") =>
  date && dayjs(date).format(dateFormat);

export default formatDate;
