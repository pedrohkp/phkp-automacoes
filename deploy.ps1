param (
    [Parameter(Mandatory=$true)]
    [string]$Message
)

Write-Host "Starting deployment..." -ForegroundColor Cyan

# Add files
Write-Host "Adding changes..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "Creating commit: '$Message'" -ForegroundColor Yellow
git commit -m "$Message"

# Push
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
} else {
    Write-Host "Deployment failed." -ForegroundColor Red
}
