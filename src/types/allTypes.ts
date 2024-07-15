export interface CommonProps {
  children?:
    | string
    | number
    | boolean
    | React.ReactElement<string | React.JSXElementConstructor<unknown>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    |undefined;
}

export interface weatherState{
  watherReport:{
    currentReport:object,
    locationName:string,
  }|null
}