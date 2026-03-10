"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import FileUpload from "@/components/FileUpload"

import dynamic from "next/dynamic"
import "react-quill-new/dist/quill.snow.css"
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false })

export default function CreateArticlePage() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [cover, setCover] = useState<File | string | null>(null)
    const [coverUrl, setCoverUrl] = useState("")
    const handleFileUpload = async (file: File | string | null) => {
        if (!file || typeof file === "string") return
        const formData = new FormData()
        formData.append("file", file)
        formData.append("label", "ARTICLE_COVER")

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData
        })

        const data = await res.json()

        setCoverUrl(data.fileUrl)
        setCover(data.fileUrl)
    }

    const handleSubmit = async () => {
        const payload = {
            title,
            cover_url: coverUrl,
            content
        }

        const res = await fetch("/api/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })

        if (res.ok) {
            alert("Article created!")
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
                            setCover(file)
                            handleFileUpload(file)
                        }}
                    />
                </div>

                <div className="bg-white rounded-lg border">
                    <style>{`
                        .ql-editor {
                        color: black;
                        }
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
                    <Button
                        onClick={handleSubmit}
                        className="bg-green1 px-6"
                    >
                        Save
                    </Button>
                </div>

            </div>

        </div>
    )
}