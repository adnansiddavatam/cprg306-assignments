import Link from 'next/link';
import StudentInfo from './StudentInfo';
export default function Page() {
  return (
    <main>
      <StudentInfo></StudentInfo>
      
        <Link href="../week2">Week 2</Link>
        <div>
          <Link href="../week3">Week 3</Link>
        </div>
        <div>
          <Link href="../week4">Week 4</Link>
        </div>
        <div>
          <Link href="../week5">Week 5</Link>
        </div>
        <div>
          <Link href="../week6">Week 6</Link>
        </div>
        <div>
          <Link href="../week7">Week 7</Link>
        </div>
        <div>
          <Link href="../week8">Week 8</Link>
        </div>
        <div>
          <Link href="../week10">Week 10</Link>
        </div>
    </main>

  );
}