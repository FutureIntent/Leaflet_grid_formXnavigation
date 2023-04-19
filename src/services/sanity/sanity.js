import sanityClient from '@sanity/client';

const CryoSanityClient = sanityClient({
    apiVersion: '2021-08-31',
    projectId: process.env.NEXT_PUBLIC_SANITY_ID || '', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
});

export default CryoSanityClient;
