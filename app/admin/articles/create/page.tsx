"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import FileUpload from "@/components/FileUpload"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import dynamic from "next/dynamic"
import "react-quill-new/dist/quill.snow.css"
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false })

export default function CreateArticlePage() {
    const router = useRouter();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [cover, setCover] = useState<File | string | null>(null)
    const [coverUrl, setCoverUrl] = useState("")

    const form = useForm({
        defaultValues: {
            title: "",
            coverUrl: "",
            content: ""
        }
    })

    const handleFileUpload = async (
        file: File | string | null,
        fileType: string
    ) => {
        if (!file) {
            if (fileType === "cover") {
                form.setValue("coverUrl", "")
                setCoverUrl("")
            }
            localStorage.setItem("formData", JSON.stringify(form.getValues()))
            return
        }

        if (typeof file === "string") return

        if (!file.type.includes("image")) {
            console.log("Only images are allowed")
            return
        }

        try {
            const uploadFormData = new FormData()
            uploadFormData.append("file", file)

            const response = await fetch("/api/admin/upload-cover", {
                method: "POST",
                body: uploadFormData
            })

            const data = await response.json()
            console.log(JSON.stringify(data));
            
            if (fileType === "cover") {
                form.setValue("coverUrl", data.coverUrl)
                setCoverUrl(data.coverUrl)  
                setCover(data.coverUrl)
            }

            localStorage.setItem("formData", JSON.stringify(form.getValues()))
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async () => {
        const payload = {
            title,
            cover_url: coverUrl,
            content
        }

        const res = await fetch("/api/admin/create-articles", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })

        if (res.ok) {
            alert("Article created!");
            setTimeout(() => {
                router.push('/admin/articles')
            }, 2000);
        }
    }

    return (
        <div className="flex justify-center w-full py-16 bg-gray-50">
            <div className="w-[900px] flex flex-col gap-8">
                <input
                    placeholder="Insert your title here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-center text-4xl text-green1 font-bold outline-none border-b pb-3"
                />

                <div className="w-[300px]">
                    <FileUpload
                        label="Upload Cover Picture"
                        acceptedFormats=".png,.jpg,.jpeg"
                        maxSize={1}
                        file={cover}
                        onChange={(file) => {
                            setCover(file)  // fixed
                            handleFileUpload(file, "cover")
                        }}
                    />
                </div>

                <div className="bg-white rounded-lg border">
                    <style>{`
                        .ql-editor { color: black; }
                    `}</style>
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        placeholder="Write your article here..."
                        className="h-[300px]"
                    />
                </div>

                <div className="flex justify-end mt-10">
                    <Button onClick={handleSubmit} className="bg-green1 px-6">
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}