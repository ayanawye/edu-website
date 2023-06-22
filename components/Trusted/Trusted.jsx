import Image from 'next/image';
import Group from '../../assets/images/group.png'
import Group2 from '../../assets/images/group2.png'
import Group3 from '../../assets/images/group3.png'
import s from './Trusted.module.scss';
import { images } from "../../imgData";

const Trusted = () => {
  return (
    <div className={s.trust}>
      <div className={s.container}>
        <div className={s.content}>
          <h2>Trusted by Company</h2>
          <div className={s.images}>
            {
              images.map(img => (
                <div key={img.id} className={s.image}>
                  <Image className={s.img}  placeholder='blur' src={img.src} alt={img.alt} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;