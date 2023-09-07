
import { useSelector } from 'react-redux';
import styles from './MagboostV8.module.scss';
import { RootState } from '@/app/Redux/store';


function PreviewTitle({previewTitle}: {previewTitle: Array<string>}) {
   let scrollPositionCount = 18.5;
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
   <div className={styles.preview}>
      <div className={`${styles.preview__titleContainer}`}>
         {previewTitle.map((el, index) => {
            scrollPositionCount += 1;
            return (
               <div key={index} className={styles.preview__textLine}>
                  {el}
                  <div style={{width: scrollPosition > scrollPositionCount ? '100%' :'0%'}} className={styles.preview__textFiller}>{el}</div>
               </div>
            )
         })}
      </div>
   </div>
   )
}
export default PreviewTitle;