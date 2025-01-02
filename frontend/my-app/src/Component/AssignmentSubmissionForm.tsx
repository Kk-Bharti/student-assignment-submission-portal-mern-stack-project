// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { submitAssignment } from '../actions'

// export default function AssignmentSubmissionForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const router = useRouter()

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     setIsSubmitting(true)

//     const formData = new FormData(event.currentTarget)
//     await submitAssignment(formData)

//     setIsSubmitting(false)
//     router.refresh()
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Submit Assignment</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="title">Assignment Title</Label>
//             <Input id="title" name="title" required />
//           </div>
//           <div>
//             <Label htmlFor="description">Description</Label>
//             <Textarea id="description" name="description" required />
//           </div>
//           <div>
//             <Label htmlFor="file">File Upload</Label>
//             <Input id="file" name="file" type="file" required />
//           </div>
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Submitting...' : 'Submit Assignment'}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }

