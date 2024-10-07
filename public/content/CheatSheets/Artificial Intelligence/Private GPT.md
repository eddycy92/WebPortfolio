#privategpt #ai #llm #machinelearning
SET UP:
	Default: (settings.yaml)
		`poetry install --extras "ui vector-stores-qdrant llms-ollama embeddings-huggingface` #poerty
	Ollama: (settings-ollama.yaml)
		`poetry install --extras "ui llms-ollama embeddings-ollama vector-stores-qdrant"` #poetry #ollama
		Options:
			- ui: adds support for UI using Gradio
			- llms-ollama: adds support for Ollama LLM, the easiest way to get a local LLM running, requires Ollama running locally
			- llms-llama-cpp: adds support for local LLM using LlamaCPP - expect a messy installation process on some platforms
			- llms-sagemaker: adds support for Amazon Sagemaker LLM, requires Sagemaker inference endpoints
			- llms-openai: adds support for OpenAI LLM, requires OpenAI API key
			- llms-openai-like: adds support for 3rd party LLM providers that are compatible with OpenAI’s API
			- llms-azopenai: adds support for Azure OpenAI LLM, requires Azure OpenAI inference endpoints
			- embeddings-ollama: adds support for Ollama Embeddings, requires Ollama running locally
			- embeddings-huggingface: adds support for local Embeddings using HuggingFace
			- embeddings-sagemaker: adds support for Amazon Sagemaker Embeddings, requires Sagemaker inference endpoints
			- embeddings-openai = adds support for OpenAI Embeddings, requires OpenAI API key
			- embeddings-azopenai = adds support for Azure OpenAI Embeddings, requires Azure OpenAI inference endpoints
			- vector-stores-qdrant: adds support for Qdrant vector store
			- vector-stores-chroma: adds support for Chroma DB vector store
			- vector-stores-postgres: adds support for Postgres vector store

EMBEDDINGS: #embedings
	Ollama: #ollama 
		(Recommended) Will connect to your local Ollama instance
	HuggingFace: #huggingface
		In order for HuggingFace LLM to work (the second option), you need to download the embeddings model to the `models` folder. You can do so by running the `setup` script:
			`poetry run python scripts/setup` #poetry #python #setupscript

LLM: #llm 
	Ollama: #ollama
		(Recommended) Will connect to your local Ollama instance
	llms-llama-cpp: #llamacpp
		llms-llama-cpp’ option use LlamaCPP works great on Mac with Metal (leverages Metal GPU). Tricky in Linux and Windows , depending on the GPU
		download the LLM model to the `models` folder and run:
			`poetry run python scripts/setup` 
			
			
			
STOP "OLLAMA SERVE"
		`udo lsof -t -i:11434 | kill`
		
