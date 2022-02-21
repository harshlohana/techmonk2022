import Link from 'next/link';
import cn from 'classnames';
import style from './button.module.scss';
const Button: React.FC<any> = (props: any) => {
  const {
    children,
    onClick,
    className,
    element,
    href,
    type,
    disabled,
    name,
    id,
    onChange,
    target,
    accept,
    multiple = false,
  } = props;
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  if (element === 'a') {
    const isExternalLink = (href || '').indexOf('http') !== -1;
    if (isExternalLink) {
      return (
        <a
          className={classNames(className)}
          href={href}
          onClick={onClick}
          target={target}
          rel="nofollow noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href}>
        <a
          className={classNames(className)}
          type={type || 'button'}
          onClick={onClick}
          target={target}
        >
          {children}
        </a>
      </Link>
    );
  }
  if (element === 'file') {
    return (
      <div className={classNames(className)}>
        <span>{children}</span>
        <input
          type="file"
          name={name}
          id={id}
          onClick={onClick}
          accept={accept}
          onChange={onChange}
          multiple={multiple}
        />
      </div>
    );
  }
  return (
    <button
      className={cn(style.btn, classNames(className))}
      disabled={disabled}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
