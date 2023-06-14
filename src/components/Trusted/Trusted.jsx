import Image from 'next/image';
import Group from '../../assets/images/group.png'
import Group2 from '../../assets/images/group2.png'
import Group3 from '../../assets/images/group3.png'
import s from './Trusted.module.scss';

const Trusted = () => {
  return (
    <div className={s.trust}>
      <div className={s.container}>
        <div className={s.content}>
          <h1>Trusted by Company</h1>
          <div className={s.images}>
            <div className={s.image}>
              <Image src={Group} className={s.img} alt='logo' placeholder='blur'/>
            </div>
            <div className={s.image}>
              <Image src={Group2} className={s.img} alt='logo' placeholder='blur'/>
            </div>
            <div className={s.image}>
              <Image src={Group3} className={s.img} alt='logo' placeholder='blur'/>
            </div>
            <div className={s.image}>
              <Image src={Group} className={s.img} alt='logo' placeholder='blur'/>
            </div>
            <div className={s.image}>
              <Image src={Group3} className={s.img} alt='logo' placeholder='blur'/>
            </div>
            <div className={s.image}>
              <Image src={Group2} className={s.img} alt='logo' placeholder='blur'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;