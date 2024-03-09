import streamlit as st
from dotenv import load_dotenv
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
import os
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

def get_pdf_text(pdf_path):
    alt_path = "output.pdf"
    if os.path.exists(pdf_path) and pdf_path.endswith('.txt'):
        
        with open(pdf_path, 'r') as file:
            text_content = file.read()

        pdf_canvas = canvas.Canvas(alt_path, pagesize=letter)
        pdf_canvas.setFont("Helvetica", 12)
        pdf_canvas.drawString(100, 700, text_content)
        pdf_canvas.save()
        
        pdf_path = alt_path

    text = ""
    pdf_reader = PdfReader(pdf_path)
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text


def get_text_chunks(text):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    chunks = text_splitter.split_text(text)
    return chunks


def get_vectorstore(text_chunks):
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    return vectorstore


def get_conversation_chain(vectorstore):
    llm = ChatOpenAI()

    memory = ConversationBufferMemory(
        memory_key='chat_history', return_messages=True)
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    return conversation_chain

def main():
    load_dotenv()

    question = "Who is Shekokar ?"
                
    pdf = "input.txt"
    raw_text = get_pdf_text(pdf)
    text_chunks = get_text_chunks(raw_text)
    vectorstore = get_vectorstore(text_chunks)
    converstion = get_conversation_chain(vectorstore)

    response = converstion({'question': question})
    print(response)


if __name__ == '__main__':
    main()