import { useRef, forwardRef, MutableRefObject, ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react'
import { mergeRefs } from 'react-merge-refs'

import { FunctionComponent, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  // children: Element[]
  ref: MutableRefObject<HTMLInputElement | undefined>
}

// export const MyComponent: FunctionComponent<Props> = ({ label, children }) => (
//   <div>
//     {label}: {children}
//   </div>
// )
// const Layout: FunctionComponent<Props> = forwardRef(({ children, ref, ...props }) => {
const Layout: ForwardRefExoticComponent<Pick<Props, 'children'> & RefAttributes<HTMLInputElement>> = forwardRef(
  ({ children, ...props }, ref) => {
    const localRef = useRef()
    return (
      <div
        ref={mergeRefs([ref, localRef])}
        className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50'>
        {children}
      </div>
    )
  },
)
Layout.displayName = 'Layout'

export default Layout
