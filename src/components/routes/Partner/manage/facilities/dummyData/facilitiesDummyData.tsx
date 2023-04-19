import { FacilityInterface } from "@components/routes/Partner/manage/ManageTypes";


const dummy1: FacilityInterface = {
    img: 'https://artimg.gympik.com/articles/wp-content/uploads/2019/10/Featured.jpg',
    heading: 'Gain Hard Oxford',
    address: '458 Oxford St, London',
    place: 'GYM',
    devices: 5,
    agents: 2
}

const dummy2: FacilityInterface = {
    img: 'https://www.frontsigns.com/wp-content/uploads/2021/07/valley-LED-clinic-sign.jpg',
    heading: 'The London Clinic',
    address: '130 Haverstock Hill, London',
    place: 'CLINIC',
    devices: 2,
    agents: 5
}

const dummy3: FacilityInterface = {
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a167c88a-a9a5-45bb-afea-26dab0b5c0fc/d64mw8u-15e69551-6a73-479c-be7f-5636e6ac5233.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExNjdjODhhLWE5YTUtNDViYi1hZmVhLTI2ZGFiMGI1YzBmY1wvZDY0bXc4dS0xNWU2OTU1MS02YTczLTQ3OWMtYmU3Zi01NjM2ZTZhYzUyMzMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GG8hW641Ia7vBZQFGESdSV0Ajhx1VEJQnaBhm6-09Oo',
    heading: 'KSHATRI’S DEN',
    address: '458 Oxford St, London',
    place: 'YOGA CENTER',
    devices: 30,
    agents: 20
}

const dummy4: FacilityInterface = {
    img: 'https://static.dezeen.com/uploads/2014/10/Markthal-Rotterdam-by-MVRDV-b_dezeen_784_0.jpg',
    heading: 'Damien Walters & Co.',
    address: '458 Oxford St, London',
    place: 'SPORT CENTER',
    devices: 15,
    agents: 20
}

const dummy5: FacilityInterface = {
    img: 'https://www.hoteljurmala.com/sites/default/files/carousel/wellness-oasis-min.jpg',
    heading: 'Thai Experience',
    address: '458 Oxford St, London',
    place: 'SPA',
    devices: 150,
    agents: 100
}

const dummy6: FacilityInterface = {
    img: 'https://www.cuddlynest.com/blog/wp-content/uploads/2020/09/beautiful-buildings-museum-of-the-future-dubai.jpg',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus et nunc nec maximus. Maecenas odio nunc, congue sit amet efficitur vel, mattis at lorem.',
    address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ante augue. Curabitur maximus dolor nec euismod fermentum. Donec lectus enim, aliquam sit amet maximus.',
    place: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque dui odio, at auctor felis.'.toUpperCase(),
    devices: 15000000000000000000,
    agents: 100000000000000000000
}

const facilityDummy = [dummy1, dummy2, dummy3, dummy4, dummy5, dummy6];
const facilityDummyReverserd = facilityDummy.reverse();
const facilityDummyList = facilityDummy.concat(facilityDummyReverserd);

export default facilityDummyList;