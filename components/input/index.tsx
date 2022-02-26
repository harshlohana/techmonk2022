import Image from 'next/image';
import styles from './input.module.scss';

const Input: React.FC<any> = (props: any) => {
  const {
    children,
    className,
    inputclassName,
    type,
    name,
    labeltext,
    lefticon,
    righticon,
    ...restProps
  } = props;
  return (
    <>
      <div className={styles['form-group']}>
        <input
          type={type}
          className={styles['form-control']}
          name={name}
          {...restProps}
        />
        {children}
        {lefticon ? (
          <span className={styles['left-icon']}>
            <Image
              src={lefticon}
              alt="Techmonk"
            />
          </span>
        ) : null}
      </div>
    </>
  );
};
export default Input;