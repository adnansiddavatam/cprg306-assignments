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
    </main>

  );
}