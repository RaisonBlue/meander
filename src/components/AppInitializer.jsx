import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { resetList } from '../stores/current-day'

export default ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetList(mockedDays))
  })
  return (
    <NavigationContainer>
      { children }
    </NavigationContainer>
  )
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam et leo tristique ullamcorper eget sit amet dui. Nullam convallis, mi id ornare cursus, ex lorem aliquet velit, sit amet volutpat ligula quam et libero. Pellentesque id justo tortor. Mauris augue lorem, volutpat et viverra non, condimentum sit amet eros. In hac habitasse platea dictumst. Quisque rutrum pulvinar mi, vel porta felis sagittis id. Donec vel est massa. In ipsum urna, volutpat eget pellentesque vel, auctor id nunc. Suspendisse potenti. Nullam imperdiet placerat arcu eget fermentum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam et leo tristique ullamcorper eget sit amet dui. Nullam convallis, mi id ornare cursus, ex lorem aliquet velit, sit amet volutpat ligula quam et libero. Pellentesque id justo tortor. Mauris augue lorem, volutpat et viverra non, condimentum sit amet eros. In hac habitasse platea dictumst. Quisque rutrum pulvinar mi, vel porta felis sagittis id. Donec vel est massa. In ipsum urna, volutpat eget pellentesque vel, auctor id nunc. Suspendisse potenti. Nullam imperdiet placerat arcu eget fermentum.'

const mockedDays = [
  { id: 0, location: 'Cappadoce', date: '1594486828430', weather: 'SUN', temperature: 32, kilometers: 42, photosCount: 122, cover: 'https://images.unsplash.com/photo-1591448764624-d7973a442bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80', story: lorem },
  { id: 1, location: 'Madrid', date: '1594573228430', weather: 'SUN', temperature: 29, kilometers: 25, photosCount: 98, cover: 'https://images.unsplash.com/photo-1578305698944-874fa44d04c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', story: lorem },
  { id: 2, location: 'Petrograd', date: '1594659628430', weather: 'SUN', temperature: 16, kilometers: 14, photosCount: 33, cover: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80', story: lorem },
  { id: 3, location: 'Strasbourg', date: '1594746028430', weather: 'SUN', temperature: 4, kilometers: 42, photosCount: 59, cover: 'https://images.unsplash.com/photo-1576190760826-f13701661792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', story: lorem },
]
