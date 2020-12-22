import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import Telegram from "../../lib/news/telegram";
import useLocale from "../../hooks/useLocale";
import Emoji from "../Emoji";

const TelegramText: FunctionComponent<{telegram: Telegram}> = ({ telegram }) => {
  const { language } = useLocale();

  return (
    <>
      {(dayjs(telegram.timestamp).locale(language).format("HH:mm DD MMM YYYY"))}
      {": "}
      <Emoji>{telegram.content}</Emoji>
    </>
  );
};

export default TelegramText;
