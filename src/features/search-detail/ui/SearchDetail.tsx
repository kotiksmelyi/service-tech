import { Image } from 'antd';
import './search-detail.styles.scss';
export const SearchDetail = () => {
  return (
    <div className="search-detail">
      <div className="search-detail-fullscreen">
        <Image
          preview={false}
          className="search-detail-image"
          src={
            'https://s3-alpha-sig.figma.com/img/e14c/d947/35bffc5ed115c917f1fe2a89c1b49bd6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giwUGOS~Nf0coWqzxeeRAUpHLmo2ylrk0qwmCAcUqe5RY1MTbQo3DyDfvomQLMaRDzsWPdE7I1N4wwFfbaSDVDpD~fwZq25IDNVMmW7L0LldJBRMx69PApAbdUzjQ30uXUGkX3x~Bbs9qevSHE3ykV8UidGjbQG9w9HoG1t77W5B9TrACU1cKd4sL4JMq6SHr~iMw~hNyjNjwx4Ce82jAriQcBwtFOeLhICwFzcuCCU2gWOUVh8v5V3Kp79mWChGZke7kj9N4Ubf6eI~VFW2Lh2K3njAqHwF238P9GB~-k3WHPvG-gCUIWUG3fdwfHyxO08hXU2EXIXp8px7CCy1Zg__'
          }
        />
      </div>
    </div>
  );
};
