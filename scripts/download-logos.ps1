$ErrorActionPreference = "Stop"

# 创建目录（如果不存在）
$logoDir = "public/images/logos"
if (-not (Test-Path $logoDir)) {
    New-Item -ItemType Directory -Path $logoDir -Force
}

# 下载 freeCodeCamp logo
Invoke-WebRequest -Uri "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" -OutFile "$logoDir/freecodecamp.png"

# 注意：由于 Paydestal logo 可能是私有的，您需要手动添加
