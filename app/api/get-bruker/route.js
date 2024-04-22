import prisma from '@/lib/prisma';

export async function getPosts(epost) {
  //const cookie = request.cookies.get('userEmail')
  //const cV = cookie.value;
  //console.log(cV)

  try {
    const posts = await prisma.bruker.findMany({
      where: { epost: epost },
    });
    return posts;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}