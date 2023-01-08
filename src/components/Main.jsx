import React from 'react'
import './css/main.css'

function Main({mainRef}) {
  return (
    <div className="main-wrapper">
      <div className='main dark:bg-neutral-900' id='main' ref={mainRef}>
        <h1 className='text-3xl font-medium dark:text-gray-300'>Main</h1>
        <p className='dark:text-gray-300'>This is my portfolio website.</p>
        <p className='dark:text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac iaculis dolor. Aliquam libero felis, iaculis vehicula malesuada at, porta tristique leo. Sed in mollis urna, a rutrum mi. Aliquam erat volutpat. Vestibulum aliquam nunc vel eros ultrices porttitor. Sed erat massa, commodo vitae tellus feugiat, vulputate vulputate tortor. Vestibulum sagittis fringilla iaculis. In feugiat interdum nisi, eu posuere lacus. Phasellus sed aliquet massa.

  Nulla id dictum urna. Morbi finibus consectetur nibh, eget suscipit ante. Morbi nec lorem in erat molestie laoreet. In hac habitasse platea dictumst. Curabitur ultrices odio non eleifend varius. Praesent porttitor ex ut ante interdum mattis a ut magna. Vestibulum ut rutrum felis.

  Donec pharetra quam et semper viverra. Morbi lacus leo, pulvinar at dolor ut, efficitur euismod urna. In et tellus odio. Aliquam nec arcu vel lorem fringilla bibendum in non sapien. Mauris quis urna nulla. Suspendisse sed feugiat est, ut dignissim urna. Maecenas ante ligula, sollicitudin nec lorem vitae, viverra vehicula dolor. Sed id dolor tincidunt, ultrices nulla ac, luctus velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras lacus lectus, pretium sit amet neque congue, interdum ornare dolor. Aliquam vitae quam in nisi eleifend molestie. Nullam ut urna eget nisi rutrum tempor sit amet sed nisl. Nam dapibus ipsum eu diam feugiat faucibus.

  Integer a orci ut arcu scelerisque ultrices. Maecenas ac ligula egestas, pharetra orci a, porta sem. Aliquam porttitor quam quam, a porta sem blandit vitae. Quisque ut imperdiet ipsum. Duis consectetur purus at turpis pulvinar, ac tincidunt diam dignissim. Nunc tincidunt quis nulla eu sollicitudin. In eu rutrum velit. Morbi scelerisque elementum dictum.

  In congue iaculis nibh vitae maximus. Nunc efficitur massa risus, a tristique magna tincidunt in. Nulla pulvinar leo augue, nec convallis orci volutpat ut. Morbi scelerisque vestibulum velit, vel iaculis libero tincidunt in. Vestibulum et feugiat ex. Donec euismod libero nunc, nec mollis justo iaculis eget. Vivamus consectetur, mi eu vestibulum consectetur, sapien sapien rhoncus lorem, vitae aliquet felis lacus in tellus. Praesent nec ullamcorper arcu. Duis sed augue vestibulum tortor imperdiet placerat vitae sit amet nulla. Nam et ex felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quam turpis, dictum id euismod vitae, aliquam nec quam. Donec cursus tristique libero vitae dictum. Nullam quis justo vel mi semper cursus. Nullam sed ornare ipsum. Aliquam ultrices, neque nec imperdiet aliquam, est eros elementum urna, at elementum purus leo sodales arcu.</p>

      </div>

    </div>
  )
}

export default Main
