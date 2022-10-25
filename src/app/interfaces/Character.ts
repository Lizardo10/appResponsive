export interface Character{
  char_id:number;
  name:string;
  img:string;
  status:string;
  nickname:string;
  occupation:Occupation[];

}
interface Occupation{
  name:string;
}
