// Language Mappings for Piston API
export const LANGUAGE_VERSIONS: Record<string, string> = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  c: "10.2.0",
  cpp: "10.2.0",
  typescript: "5.0.3",
  csharp: "6.12.0",
}

export const LANGUAGE_IDS: Record<string, string> = {
  javascript: "javascript",
  python: "python",
  java: "java",
  cpp: "c++",
  typescript: "typescript",
}

const PISTON_API_URL = "https://emkc.org/api/v2/piston/execute"

export async function executeCode(
  sourceCode: string,
  language: string,
  stdin: string = ""
) {
  try {
    const response = await fetch(PISTON_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: "*", // Use latest available version
        files: [
          {
            content: sourceCode,
          },
        ],
        stdin: stdin,
      }),
    })

    const data = await response.json()

    if (data.message) {
        throw new Error(data.message)
    }

    // Adapt Piston response to match Judge0 structure for compatibility
    const isError = data.run.code !== 0
    const statusId = isError ? 11 : 3 // 3 = Accepted, 11 = Error
    const statusDescription = isError ? "Runtime Error" : "Accepted"
    
    return {
        status: {
            id: statusId,
            description: statusDescription
        },
        stdout: data.run.stdout,
        stderr: data.run.stderr,
        compile_output: data.compile?.stderr || data.compile?.stdout,
    }
  } catch (error) {
    console.error("Execution error:", error)
    throw error
  }
}

