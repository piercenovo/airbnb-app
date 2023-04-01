import { IconProps } from '@/types'

export const SearchIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
    >
      <path d='M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z' />
    </svg>
  )
}

export const MenuIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
    >
      <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
    </svg>
  )
}

export const CloseIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
    >
      <path d='M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z' />
    </svg>
  )
}

export const HolaIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
    >
      <path d='M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z' />
    </svg>
  )
}

export const GoogleIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      className={className}
    >
      <path
        fill='#FFC107'
        d='M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z'
      />
      <path
        fill='#FF3D00'
        d='M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z'
      />
      <path
        fill='#4CAF50'
        d='M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z'
      />
      <path
        fill='#1976D2'
        d='M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z'
      />
    </svg>
  )
}

export const GithubIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      className={className}
    >
      <linearGradient
        id='rL2wppHyxHVbobwndsT6Ca'
        x1='4'
        x2='44'
        y1='23.508'
        y2='23.508'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#4c4c4c' />
        <stop offset='1' stopColor='#343434' />
      </linearGradient>
      <path
        fill='url(#rL2wppHyxHVbobwndsT6Ca)'
        d='M24 4C12.954 4 4 12.954 4 24c0 8.887 5.801 16.411 13.82 19.016h12.36C38.199 40.411 44 32.887 44 24c0-11.046-8.954-20-20-20z'
      />
      <path
        d='M30.01 41.996L30 36.198c0-.939-.22-1.856-.642-2.687 5.641-1.133 8.386-4.468 8.386-10.177 0-2.255-.665-4.246-1.976-5.92.1-.317.174-.645.22-.981.188-1.369-.023-2.264-.193-2.984l-.027-.116c-.186-.796-.409-1.364-.418-1.388l-.111-.282-.111-.282-.302-.032-.303-.032s-.199-.021-.501-.021c-.419 0-1.04.042-1.627.241l-.196.066c-.74.249-1.439.485-2.417 1.069-.286.171-.599.366-.934.584A20.188 20.188 0 0024 12.69c-1.722 0-3.365.192-4.889.571-.339-.22-.654-.417-.942-.589-.978-.584-1.677-.819-2.417-1.069l-.196-.066c-.585-.199-1.207-.241-1.626-.241-.302 0-.501.021-.501.021l-.302.032-.3.031-.112.281-.113.283c-.01.026-.233.594-.419 1.391l-.027.115c-.17.719-.381 1.615-.193 2.983.048.346.125.685.23 1.011-1.285 1.666-1.936 3.646-1.936 5.89 0 5.695 2.748 9.028 8.397 10.17a6.005 6.005 0 00-.452 1.224 3.248 3.248 0 01-.538.137 4.963 4.963 0 01-.739.054c-.686 0-1.225-.134-1.435-.259-.313-.186-.872-.727-1.414-1.518-.463-.675-1.185-1.558-1.992-1.927-.698-.319-1.437-.502-2.029-.502-.138 0-.265.01-.376.028-.517.082-.949.366-1.184.78a1.313 1.313 0 00-.088 1.141c.219.548.851.985 1.343 1.255.242.133.765.619 1.07 1.109.229.368.335.63.482.992.087.215.183.449.313.732.47 1.022 1.937 1.924 2.103 2.023.806.483 2.161.638 3.157.683l.123.003h.001c.24 0 .57-.023 1.004-.071v2.613c.002.529-.537.649-1.25.638l.547.184A19.85 19.85 0 0024 44c2.355 0 4.605-.428 6.703-1.176l.703-.262c-.711-.024-1.39-.14-1.396-.566z'
        opacity='0.05'
      />
      <path
        d='M30.781 42.797c-.406.047-1.281-.109-1.281-.795v-5.804a5.445 5.445 0 00-.936-3.052c5.915-.957 8.679-4.093 8.679-9.812 0-2.237-.686-4.194-2.039-5.822.137-.365.233-.75.288-1.147.175-1.276-.016-2.086-.184-2.801l-.027-.116a10.279 10.279 0 00-.397-1.319l-.111-.282-.303-.032s-.178-.019-.449-.019c-.381 0-.944.037-1.466.215l-.196.066c-.714.241-1.389.468-2.321 1.024-.332.198-.702.431-1.101.694-1.533-.401-3.192-.605-4.937-.605-1.762 0-3.435.205-4.979.61a31.394 31.394 0 00-1.109-.699c-.932-.556-1.607-.784-2.321-1.024l-.196-.066c-.521-.177-1.085-.215-1.466-.215a4.68 4.68 0 00-.449.019l-.302.032-.113.283c-.009.022-.219.558-.397 1.319l-.027.116c-.169.715-.36 1.524-.184 2.8.056.407.156.801.298 1.174-1.327 1.62-1.999 3.567-1.999 5.795 0 5.703 2.766 8.838 8.686 9.806a5.445 5.445 0 00-.813 1.964 4.22 4.22 0 01-.891.256c-.263.04-.537.06-.814.06-.69 0-1.353-.129-1.69-.329-.44-.261-1.057-.914-1.572-1.665-.35-.51-1.047-1.417-1.788-1.755-.635-.29-1.298-.457-1.821-.457-.11 0-.21.008-.298.022-.366.058-.668.252-.828.534a.815.815 0 00-.059.708c.179.448.842.85 1.119 1.002.335.184.919.744 1.254 1.284.251.404.37.697.521 1.067.085.209.178.437.304.712.331.719 1.353 1.472 1.905 1.803.754.452 2.154.578 2.922.612l.111.002c.299 0 .8-.045 1.495-.135v3.177c0 .779-.991.81-1.234.81-.031 0 .503.184.503.184A19.946 19.946 0 0024 44c2.178 0 4.269-.36 6.231-1.003 0 0 .581-.204.55-.2z'
        opacity='0.07'
      />
      <path
        fill='#fff'
        d='M36.744 23.334c0-2.31-.782-4.226-2.117-5.728.145-.325.296-.761.371-1.309.172-1.25-.031-2-.203-2.734s-.375-1.25-.375-1.25-.922-.094-1.703.172-1.453.469-2.422 1.047c-.453.27-.909.566-1.27.806-1.543-.428-3.24-.648-5.025-.648-1.801 0-3.513.221-5.067.652a31.422 31.422 0 00-1.277-.811c-.969-.578-1.641-.781-2.422-1.047s-1.703-.172-1.703-.172-.203.516-.375 1.25-.375 1.484-.203 2.734c.077.562.233 1.006.382 1.333-1.31 1.493-2.078 3.397-2.078 5.704 0 5.983 3.232 8.714 9.121 9.435a4.972 4.972 0 00-1.303 2.691c-.387.17-.833.33-1.262.394-1.104.167-2.271 0-2.833-.333s-1.229-1.083-1.729-1.813c-.422-.616-1.031-1.331-1.583-1.583-.729-.333-1.438-.458-1.833-.396-.396.063-.583.354-.5.563.083.208.479.521.896.75.417.229 1.063.854 1.438 1.458.418.674.5 1.063.854 1.833.249.542 1.101 1.219 1.708 1.583.521.313 1.562.491 2.688.542.389.018 1.308-.096 2.083-.206v3.75c0 .639-.585 1.125-1.191 1.013 1.945.654 4.022.986 6.189.986 2.166 0 4.243-.332 6.19-.984-.605.111-1.19-.375-1.19-1.014v-5.804a4.97 4.97 0 00-1.373-3.425c5.846-.702 9.117-3.368 9.117-9.439zm-25.505 9.393c-.154-.079-.237-.225-.185-.328.052-.103.22-.122.374-.043s.237.225.185.328-.22.122-.374.043zm1.212.755c-.081.088-.255.06-.389-.062s-.177-.293-.096-.381c.081-.088.255-.06.389.062s.177.293.096.381zm.754 1.25c-.102.072-.275.005-.386-.15s-.118-.34-.016-.412.275-.005.386.15c.11.155.118.34.016.412zm1.083.941c-.069.112-.265.117-.437.012s-.256-.281-.187-.393c.069-.112.265-.117.437-.012s.256.281.187.393zm1.024.921c-.213-.026-.371-.159-.353-.297.017-.138.204-.228.416-.202.213.026.371.159.353.297-.017.137-.203.228-.416.202zm1.651.239c-.227-.013-.404-.143-.395-.289.009-.146.2-.255.427-.242.227.013.404.143.395.289-.009.147-.2.255-.427.242zm1.558-.156c-.242 0-.438-.126-.438-.281s.196-.281.438-.281.438.126.438.281-.197.281-.438.281z'
      />
    </svg>
  )
}

export const DollarIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
    >
      <path d='M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z' />
    </svg>
  )
}
