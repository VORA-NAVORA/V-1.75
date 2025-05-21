import json
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.schema import Document

# Load chunked NAVORA text
with open("navora_chunks.json", "r") as f:
    chunks = json.load(f)

# Convert to LangChain Document format
docs = [Document(page_content=chunk["content"], metadata={"source": chunk["source"], "page": chunk["page"]}) for chunk in chunks]

# Embed using OpenAI
embedding_model = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(docs, embedding_model)

# Save FAISS index
vectorstore.save_local("navora_faiss_index")
print("NAVORA FAISS index saved.")
