import React from "react";
import Box from "@mui/material/Box";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { Stack } from "@mui/material";

interface SharingProps {
  url: string;
  title: string;
}
const Sharing = (props: SharingProps) => {
  const { url, title } = props;
  return (
    <>
      <Stack direction="row" spacing={2} mt={3}>
        <FacebookMessengerShareButton appId="" url={url} title={title}>
          <FacebookIcon size={30} />
        </FacebookMessengerShareButton>
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={30} />
        </WhatsappShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={30} />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={30} />
        </LinkedinShareButton>
        <EmailShareButton url={url} title={title}>
          <EmailIcon size={30} />
        </EmailShareButton>
      </Stack>
    </>
  );
};

export default Sharing;
