interface Props{
    className?:string
    figureClassName?:string
}
const BrandLogo = ({className,figureClassName}:Props) => {
  return (
    <figure className={`${figureClassName}`}>
          <img
            className={`mx-auto myBlueshadow rounded-full overflow-hidden ${className}`}
            src='./src/assets/mylogo2.png'
            alt='logo'
          />
        </figure>
  )
}

export default BrandLogo