import { useEffect, useState } from 'react'

import { database } from 'services/firebase'

type FirebaseQuestions = Record<
  string,
  {
    author: { name: string; avatar: string }
    content: string
    isAnswered: boolean
    isHighlighted: boolean
  }
>
type Question = {
  id: string
  author: { name: string; avatar: string }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
}
export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.once('value', (room) => {
      const databaseRoom = room.val()
      const firebaseQuestions = databaseRoom.questions as FirebaseQuestions

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered
          }
        }
      )
      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })
  }, [roomId, questions])

  return { questions, title }
}
